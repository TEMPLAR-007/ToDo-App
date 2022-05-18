import React from "react";
import Loader from "../../../Components/Loader/Loader";
const TodoTable = ({ isLoading, todos }) => {
  return (
    <div className="m-10">
      <label htmlFor="my-modal-3" className="btn btn-primary mb-4 modal-button">
        Add Task
      </label>
      <div className="overflow-x-auto">
        {!isLoading ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th width="120px">Action</th>
                <th width="120px">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todos.result.length > 0
                ? todos.result.map((todo, ind) => (
                    <tr key={todo._id}>
                      <th>{ind + 1}</th>
                      <td>{todo.title}</td>
                      <td>{todo.desc}</td>
                      <td>
                        <button className="btn bg-green-500 text-white border-green-400 btn-sm">
                          Complete
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-error btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))
                : "No data found"}
            </tbody>
          </table>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default TodoTable;
