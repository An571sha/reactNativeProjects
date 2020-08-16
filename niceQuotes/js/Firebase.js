import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAdfJKMIS1AZxI1mi1EYMO0R54QoVlsmSo",
    authDomain: "storied-link-237106.firebaseapp.com",
    databaseURL: "https://storied-link-237106.firebaseio.com",
    projectId: "storied-link-237106",
    storageBucket: "storied-link-237106.appspot.com",
    messagingSenderId: "38686398457",
    appId: "1:38686398457:web:dfc09d355fbf4e98c3cf28"
}

export default class Firebase {
    static db;

    static init() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(config);
        }

        Firebase.db = firebase.firestore();
    }
}