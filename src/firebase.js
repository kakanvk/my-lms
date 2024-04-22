// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByrA2RmQNtEfrHn5kAembHY569AeaptUM",
    authDomain: "my-lms-ithub.firebaseapp.com",
    projectId: "my-lms-ithub",
    storageBucket: "my-lms-ithub.appspot.com",
    messagingSenderId: "847733076123",
    appId: "1:847733076123:web:6f0ee6f714f6ddd4ed963e",
    measurementId: "G-CRVC0QMX3G"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
        const res = await signInWithPopup(auth, googleProvider);
        return res.user;
    } catch (err) {
        console.error(err);
    }
};

const signInWithGithub = async () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            return result.user;
        }).catch((error) => {
            console.error(error);
        });
};

export { auth, signInWithGoogle, signInWithGithub, signOut }