import initializeFirebase from "components/Login/Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

// initializeFirebase
initializeFirebase();

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth();

  //Google Sign In

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {});
  };
  //Facebook sign In

  const facebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //CREATE USER
  const registerUser = (email: string, password: string) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleEmailVerifyCation(auth);
        setError(null);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22);
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };
  //Email EmailVerifyCation
  const handleEmailVerifyCation = (auth: any) => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("verificycation");
    });
  };

  //Reset Email

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check email to reset your password");
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22);
        setError(errorMessage);
      });
  };

  //LOGIN
  const loginUser = (email: string, password: string) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError(null);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22);
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setError(null);
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    error,
    googleSignIn,
    facebookSignIn,
    resetPassword,
  };
};

export default useFirebase;
