import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
import Token from "../Helpers/Token";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const socialLogin = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((data) => {
        toast.success("SignIn successfully done.");
        Token(auth?.currentUser?.uid);
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      user ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return { socialLogin, user, isAuth };
};

export default useFirebase;
