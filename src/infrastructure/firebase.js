import firebase from 'firebase/app';
import "firebase/auth";

export default function InitializeFirebase(){

    const {
        REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_AUTH_DOMAIN,
        REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_STORAGE_BUCKET,
        REACT_APP_FIREBASE_APP_ID
    } = process.env;

    const config = {
        apiKey: REACT_APP_FIREBASE_API_KEY,
        authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
        appId: REACT_APP_FIREBASE_APP_ID
    };

    firebase.initializeApp(config);
}

