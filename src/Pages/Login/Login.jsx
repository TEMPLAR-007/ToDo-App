import React from "react";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen bg-sky-600">
      <div className="login-wrapper p-5 bg-white rounded shadow">
        <div className="title mb-4 text-center">
          <h2 className="text-xl ">ToDo App</h2>
        </div>
        <div className="btn-group">
          <button className="p-3 w-full border rounded-full px-10 bg-white shadow ">
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
