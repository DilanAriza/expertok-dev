import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBu2o7LFHh-_cI7YEyuW5cKN5v4ME9_Me4",
    authDomain: "expertok-7da90.firebaseapp.com",
    databaseURL: "https://expertok-7da90.firebaseio.com",
    projectId: "expertok-7da90",
    storageBucket: "expertok-7da90.appspot.com",
    messagingSenderId: "552689340941",
    appId: "1:552689340941:web:078561a164fbedd495bb44",
    measurementId: "G-LCL7Q4S2QD"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default firebase;