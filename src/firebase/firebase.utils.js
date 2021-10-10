import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: 'AIzaSyDrHPmJd8XUHa0teMT3bLvpsze2XQ4Ulho',
    authDomain: 'crwn-clothing-213e6.firebaseapp.com',
    projectId: 'crwn-clothing-213e6',
    storageBucket: 'crwn-clothing-213e6.appspot.com',
    messagingSenderId: '201499597333',
    appId: '1:201499597333:web:e3cd0fa202e2a516df0c1c',
    measurementId: 'G-JQWFJTJKEQ'
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }

    return userRef;
}

export default firebase;