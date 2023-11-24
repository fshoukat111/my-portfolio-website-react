import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAilssViG1yhoYO3gN3seBooylKl7Ip0I0",
    authDomain: "portfolio-7d480.firebaseapp.com",
    projectId: "portfolio-7d480",
    storageBucket: "portfolio-7d480.appspot.com",
    messagingSenderId: "10935540473",
    appId: "1:10935540473:web:487cb3c4c040f6850fa028",
    measurementId: "G-DYVYS7CPW7"
};

// Initialize Firebase
firestore.initializeApp(firebaseConfig);

export default firestore;
