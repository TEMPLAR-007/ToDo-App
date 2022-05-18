import React from "react";
import TodoBox from "./TodoBox/TodoBox";
import TodoTable from "./TodoTable/TodoTable";

const ToDos = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="todo-header flex justify-between my-5 p-4 rounded bg-slate-100 items-center">
          <h2 className="text-3xl font-semibold">
            ToDos Of <span className="text-sky-400">Ashik Mahmud</span>
          </h2>
          <div className="user-info flex items-center gap-4">
            <div className="avatar w-12 overflow-hidden h-12 border rounded-full border-slate-400">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/ogw/ADea4I62eAbslzhzcL8PC8FUwNeP1DD5IufopxZVnd5_Ww=s32-c-mo"
                alt="avatar"
              />
            </div>
            <button className="text-red-500">Log Out</button>
          </div>
        </div>
        <div className="todo-body">
          <TodoBox />
          <TodoTable />
        </div>
      </div>
    </section>
  );
};

export default ToDos;
