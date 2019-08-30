import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        console.log(event.target.value);
        const updateFish = {
            ...this.props.fish,
            [event.target.name]: event.target.value,
        }
        console.log(updateFish);
        this.props.updateFish(this.props.index, updateFish);
    }

    render() {
        const { name, price, status, desc, image } = this.props.fish

        return (
            <div className='fish-edit'>
                <input name='name' onChange={this.handleChange} value={name} type='text' placeholder='Name' />
                <input name='price' onChange={this.handleChange} value={price} type='text' placeholder='Price' />
                <select name='status' onChange={this.handleChange} value={status}>
                    <option onChange={this.handleChange} value='available'>Fresh !!!</option>
                    <option onChange={this.handleChange} value='unavailable'>Sold out !!!</option>
                </select>
                <textarea name='desc' onChange={this.handleChange} value={desc} type='text' placeholder='Desc'></textarea>
                <input name='image' onChange={this.handleChange} value={image} type='text' placeholder='Image' />
            </div>
        )
    }
}

export default EditFishForm;