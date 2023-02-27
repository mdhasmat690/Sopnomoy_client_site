import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";

import "./../firebase/firebase";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [userLocation, setUserLocation] = useState();

  const [reDir, setReDir] = useState();

  const Googleprovider = new GoogleAuthProvider();
  const auth = getAuth();

  /* Sign in with google */

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");

        if (reDir) {
          navigate(
            !reDir?.location ? "/getStart" : location?.state?.from || "/"
          );
        }
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  /* crate account */
  const createUserWithUserEmail = (
    email,
    password,
    name,
    location,
    navigate
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/getStart");
        const user = userCredential.user;
        setUser(user);
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        verifyEmail();
        saveUser(email, name, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  /* verifyEmail */
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  /* signInWithEmailAndPassword  */
  const signInPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const redirect_url = location?.state?.from || "/";
        //  navigate(redirect_url);
        const user = userCredential.user;
        setAuthError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const reSetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  /* Observer user state */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        fetch(`http://localhost:5000/api/v1/tools/${user.email}`)
          .then((res) => res.json())
          .then((data) => setReDir(data?.data));

        // setAdminLoading(true);
        // fetch(`https://jerins-server-side.vercel.app/users/${user.email}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     //  setAdmin(data.admin);
        //     //setAdminLoading(false);
        //   });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, []);

  /* Log out */
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { displayName, email };
    fetch("http://localhost:5000/api/v1/tools/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tools/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserLocation(data));
  }, [user.email]);

  return {
    createUserWithUserEmail,
    signInPassword,
    signInWithGoogle,
    reSetPassword,
    // handlegooglesignin,
    user,
    logOut,
    isLoading,
    // adminLoading,
    authError,
    // admin,
    userLocation,
    reDir,
  };
};

export default useFirebase;
