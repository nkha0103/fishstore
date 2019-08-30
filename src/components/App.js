import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        orders: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);

        if (localStorageRef) {
            this.setState({ orders: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.orders));
    }

    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    }

    updateFish = (key, updateFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updateFish;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        const orders = { ...this.state.orders };
        orders[key] = orders[key] + 1 || 1;
        this.setState({ orders });
    }

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />
                    <ul className='fishes'>
                        {
                            Object.keys(this.state.fishes).map(key => {
                                return (
                                    <Fish
                                        key={key}
                                        index={key}
                                        details={this.state.fishes[key]}
                                        addToOrder={this.addToOrder}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    orders={this.state.orders}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                />
            </div>
        )
    }
}

export default App;