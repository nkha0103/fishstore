import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCIWpgNO-104m17bdO6cAtaTx3A4ul_GMg",
        authDomain: "kha-fishstore.firebaseapp.com",
        databaseURL: "https://kha-fishstore.firebaseio.com"
    } 
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;