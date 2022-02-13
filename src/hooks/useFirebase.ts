import initializeFirebase from "components/Login/Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import AdminServices from "services/Admin/AdminServices";
import UserServices from "services/Users/UserServices";

// initializeFirebase
initializeFirebase();

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();

  //Google Sign In

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const { displayName, email } = user;
        // PUT REQUEST
        UserServices.updateUser({ name: displayName, email: email });
        console.log({ name: displayName, email: email });
      })
      .catch((error) => {});
  };

  //CREATE USER
  const registerUser = (email: string, password: string, name: string) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleEmailVerifyCation(auth);
        updateUserProfile(auth, name);
        console.log(user);
        
        //POST REQUEST
        UserServices.postUser({ name, email });
        setError(null);
      })
      .catch((error) => {
        const errorMessage = error.message.slice(22);
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  //UPDATE USER

  const updateUserProfile = (auth: any, name: string) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("successfully updated name");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
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
        getIdToken(user).then((idToken) => {
          console.log(idToken);
          setToken(idToken);
          window.localStorage.setItem("token", idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const { email }: any = user;
    AdminServices.checkAdmin(email).then((res: any) => {
      setAdmin(res.admin);
    });
  }, [user]);

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
    token,
    admin,
    user,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    error,
    googleSignIn,
    resetPassword,
  };
};

export default useFirebase;
