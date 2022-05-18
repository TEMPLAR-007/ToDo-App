import React from "react";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <div className="login-wrapper p-8 py-10 shadow-lg bg-base-300 rounded lg:w-96 text-center">
        <div className="title mb-6 text-center">
          <h2 className="text-xl ">ToDo App</h2>
        </div>
        <div className="btn-groups  flex flex-col justify-center items-center">
          <button className="p-3 btn btn-primary  border rounded-full px-10  shadow ">
            Continue with Google
          </button>
          <div class="divider">OR</div>
          <button className="btn btn-primary btn-outline  p-3  border rounded-full px-10 bg-base-300 shadow ">
            Continue with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
