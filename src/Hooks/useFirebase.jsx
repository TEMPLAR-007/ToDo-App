import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const socialLogin = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        toast.success("SignIn successfully done.");
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
