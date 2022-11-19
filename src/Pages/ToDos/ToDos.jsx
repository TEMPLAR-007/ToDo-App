import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { auth } from "../../Firebase/Firebase.config";
import TodoBox from "./TodoBox/TodoBox";
import TodoTable from "./TodoTable/TodoTable";
const ToDos = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* handle log out  */
  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      toast.success("SignOut successfully done.");
      localStorage.removeItem("accessToken");
    });
  };

  /*  Handle Create ToDos */

  const handleCreateToDos = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    if (!title) return toast.error(`Title Field is required.`);
    if (!desc) return toast.error(`Description field is required.`);

    const createData = {
      title,
      desc,
      createAt: new Date().toDateString(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      },
    };

    await fetch(
      `https://task-todo-server.vercel.app/todos?uid=${auth?.currentUser?.uid}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(createData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          refetch();
          event.target.reset();
        }
      });
  };

  /* Getting fetching Data */
  const {
    isLoading,
    data: todos,
    refetch,
  } = useQuery("todosApp", () =>
    fetch(
      `https://task-todo-server.vercel.app/todos?uid=${auth?.currentUser?.uid}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  return (
    <section data-theme={theme ? "emerald" : "night"} className="h-screen pt-5">
      <div className="container mx-auto">
        <div
          className={`todo-header justify-center flex flex-wrap gap-5 md:gap-0 md:justify-between py-5 p-4 rounded  items-center ${
            theme ? "bg-base-200" : "bg-base-300"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            ToDos Of{" "}
            <span className="text-sky-400">
              {auth?.currentUser?.displayName}
            </span>
          </h2>
          <div className="user-info flex items-center gap-4">
            <label className="swap swap-rotate mx-4">
              <input
                type="checkbox"
                onClick={() => setTheme((prevState) => !prevState)}
              />

              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="avatar w-12 overflow-hidden h-12 border-2 rounded-full border-primary">
              <img
                className="w-full h-full object-cover"
                src={
                  auth?.currentUser?.photoURL ||
                  "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png"
                }
                alt={auth?.currentUser?.displayName}
              />
            </div>
            <button onClick={handleLogOut} className="text-red-500">
              Log Out
            </button>
          </div>
        </div>
        <div className="todo-body">
          <TodoBox handleCreateToDos={handleCreateToDos} />
          <TodoTable isLoading={isLoading} todos={todos} refetch={refetch} />
        </div>
      </div>
    </section>
  );
};

export default ToDos;
