import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const FirebaseContext = React.createContext();

function InitializeFirebase() {
    const {
        REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_AUTH_DOMAIN,
        REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_STORAGE_BUCKET,
        REACT_APP_FIREBASE_APP_ID,
    } = process.env;

    const config = {
        apiKey: REACT_APP_FIREBASE_API_KEY,
        authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
        appId: REACT_APP_FIREBASE_APP_ID,
    };

    return firebase.initializeApp(config);
}

function useFirebase() {
    const context = useContext(FirebaseContext);

    if (!context) {
        throw new Error("Failed to find Firebase Context");
    }

    return context;
}

function FirebaseProvider(props) {
    const client = InitializeFirebase();

    return <FirebaseContext.Provider value={{ firebase: client }} {...props} />;
}

export { FirebaseProvider, useFirebase };
