import logo from './logo.svg';
import './App.css';
import { Button } from "@nextui-org/react";

import { auth, signInWithGoogle, signInWithGithub, signOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);
        } else {
            console.log("user is logged out");
        }
    });
}, []);

  const handleLoginWithGoogle = async (onClose) => {
    try {
      await signInWithGoogle();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleLoginWithGihub = async (onClose) => {
    try {
      await signInWithGithub();
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App flex flex-col gap-2 max-w-[400px] m-auto pt-20">
      <Button color="primary" radius='sm' size='lg' onClick={() => handleLoginWithGoogle()}>
        Button with Google
      </Button>
      <Button color="primary" radius='sm' size='lg' className='bg-black' onClick={() => handleLoginWithGihub()}>
        Button with Github
      </Button>
      <Button color="primary" radius='sm' size='lg' className='bg-red-500' onClick={() => handleLogout(auth)}>
        Logout
      </Button>
    </div>
  );
}

export default App;
