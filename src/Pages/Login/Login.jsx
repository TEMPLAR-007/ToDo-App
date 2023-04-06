import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import useFirebase from "../../Hooks/useFirebase";
const Login = () => {
  const { socialLogin } = useFirebase();
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [isAuth, navigate]);

  /* handle Google sign In */
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    socialLogin(provider);
  };

  /* handle facebook sign in */
  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    socialLogin(provider);
  };
  return (
    <section className="grid place-items-center h-screen ">
      <div className="login-wrapper p-8 py-10 shadow-lg bg-base-300 rounded lg:w-96 text-center">
        <div className="title mb-6 text-center">
          <h2 className="text-xl "><img width={50} className="display: inline" src="https://img.icons8.com/nolan/256/windows-notepad.png" alt="" />ToDo</h2>
        </div>
        <div className="btn-groups  flex flex-col justify-center items-center">
          <button
            onClick={handleGoogleSignIn}
            className="p-3 btn btn-warning text-w btn-outline border rounded-full px-10 shadow "
          >
            <img className="mr-2" width={25} src="https://img.icons8.com/fluency/256/google-logo.png" alt="" /> Continue with Google
          </button>
          <div className="divider">OR</div>
          <button
            onClick={handleFacebookSignIn}
            className="p-3 btn btn-info text-w btn-outline border rounded-full px-8 shadow "
          >
            <img className="mr-2" width={27} src="https://img.icons8.com/color/256/facebook-new.png" alt="" /> Continue with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
