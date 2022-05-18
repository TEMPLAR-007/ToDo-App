import { GoogleAuthProvider } from "firebase/auth";
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

  return (
    <section className="grid place-items-center h-screen ">
      <div className="login-wrapper p-8 py-10 shadow-lg bg-base-300 rounded lg:w-96 text-center">
        <div className="title mb-6 text-center">
          <h2 className="text-xl ">ToDo App</h2>
        </div>
        <div className="btn-groups  flex flex-col justify-center items-center">
          <button
            onClick={handleGoogleSignIn}
            className="p-3 btn btn-primary  border rounded-full px-10  shadow "
          >
            Continue with Google
          </button>
          <div className="divider">OR</div>
          <button className="btn btn-primary btn-outline  p-3  border rounded-full px-10 bg-base-300 shadow ">
            Continue with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
