// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp,
deleteDoc,
doc,
where,
getDoc,
setDoc

} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYy22BXGNYbd-n3c6zeyB5irWLa9ns1oY",
  authDomain: "stockmarket-5efd9.firebaseapp.com",
  projectId: "stockmarket-5efd9",
  storageBucket: "stockmarket-5efd9.appspot.com",
  messagingSenderId: "620940693482",
  appId: "1:620940693482:web:c81de6f95f9ff0ec3fac93",
  measurementId: "G-64BLC35JQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();
const colref = collection(db, 'users');
const q = query(colref, orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
        users.push({...doc.data(), id: doc.id});
    });
    console.log(users);
});
//////////////////////WORKING CODE FOR SIGNUP AND SIGNIN/////////////////
// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.querySelector('.signupForm');

//     signupForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = signupForm.querySelector('#signupEmail').value;
//         const password = signupForm.querySelector('#signupPassword').value;
        
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((cred) => {
//             // console.log('User Created: ', cred.user);
//             console.log('User Created ');
//             // user document generate
//         //     addDoc(colref.doc(cred.user.uid), {
//         //         name: signupForm.name.value,
//         //         balance: 0,
//         //         A:0,
//         //         B:0,
//         //         C:0,
//         //         D:0,
//         //         E:0,
//         //         createdAt: serverTimestamp()
//         //     })
//         //     .then(()=>{
//         //         console.log("Document Created")
//         //         signupForm.reset()
//         //     })
//         //     .catch((err) => {
//         //     console.log(err.message);
//         // });
//         const docRef = doc(colref, cred.user.uid); // Set document ID as 'document12345'
//                 setDoc(docRef, {
//                 name: signupForm.name.value,
//                 balance: 0,
//                 A:0,
//                 B:0,
//                 C:0,
//                 D:0,
//                 E:0,
//                 createdAt: serverTimestamp()
//     })
//                 .then(()=>{
//                     signupForm.reset()
//                 })
//                 .catch((error) => {
//                     console.error("Error adding document: ", error);
//                 });
        

//             //user document generate ends 


//             // You can add additional logic here after user signup
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
        

//     });
// });
// const signinForm = document.querySelector('.signinForm');
// // Signin form event listener
// signinForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const email = signinForm.querySelector('#signinEmail').value;
//         const password = signinForm.querySelector('#signinPassword').value;

//         signInWithEmailAndPassword(auth,email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log('User Signed In:', user);

//                 const docref = doc(db,'users', user.uid)
//                 getDoc(docref)
//                     .then((doc)=>{
//                         console.log(doc.data(),doc.id)
//                     })


//                 // // Read user data from Firestore based on UID
//                 // db.collection('users').doc(user.uid).get()
//                 //     .then((doc) => {
//                 //         if (doc.exists) {
//                 //             const userData = doc.data();
//                 //             console.log('User Data:', userData);
//                 //         } else {
//                 //             console.log('No such document!');
//                 //         }
//                 //     })
//                 //     .catch((error) => {
//                 //         console.error('Error getting user data:', error);
//                 //     });
//             })
//             .catch((error) => {
//                 console.error('Signin Error:', error.message);
//             });
//     });
//     const logoutButton = document.querySelector('.logoutButton');

//     logoutButton.addEventListener('click', () => {
//         auth.signOut().then(() => {
//             // Sign-out successful.
//             console.log('User signed out successfully.');
//         }).catch((error) => {
//             // An error happened.
//             console.error('Error signing out:', error);
//         });
//     });
//////////////////////WORKING CODE FOR SIGNUP AND SIGNIN/////////////////






