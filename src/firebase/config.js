import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBS5KFHuA1aYZ4Uyq9YF_2PHXj6y3AjwII',
    authDomain: 'zenn-997cb.firebaseapp.com',
    projectId: 'zenn-997cb',
    storageBucket: 'zenn-997cb.appspot.com',
    messagingSenderId: '684949904279',
    appId: '1:684949904279:web:f9a3821a7b6678272fc2d2',
};

firebase.initializeApp(firebaseConfig);

const projectAuthentication = firebase.auth();

export { projectAuthentication };
