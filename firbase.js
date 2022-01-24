 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
 import {getFirestore ,collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA65l0yh-CJChgrk9lB6Z_7CHTSjXvQwSo",
   authDomain: "fir-links-540c2.firebaseapp.com",
   projectId: "fir-links-540c2",
   storageBucket: "fir-links-540c2.appspot.com",
   messagingSenderId: "852336403392",
   appId: "1:852336403392:web:80b0cf1dad2850f6571e25"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore()

 export const saveTask = (name, url, description) => 
    addDoc(collection(db, 'tasks'),{name, url, description}) 
 
 export const getTasks = () => getDocs(collection(db, 'tasks'))

 export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'),callback)

 export const deleteTask = id => deleteDoc(doc(db, 'tasks', id))

 export const getTask = id => getDoc(doc(db, 'tasks', id))

 export const updateTask = (id, newFiels) => updateDoc(doc(db, 'tasks', id, newFiels))
