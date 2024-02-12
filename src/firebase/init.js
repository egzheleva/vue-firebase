// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqSwZ9pCgdBrwckxxuN9L9f57Z9ubQdsI",
    authDomain: "vue-3-crud-34b8d.firebaseapp.com",
    projectId: "vue-3-crud-34b8d",
    storageBucket: "vue-3-crud-34b8d.appspot.com",
    messagingSenderId: "986687845661",
    appId: "1:986687845661:web:5fe1e3ebc4d58f42075df4",
    measurementId: "G-PTDCGH7GL4"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}