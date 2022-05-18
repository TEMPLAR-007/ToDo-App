import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import { auth } from "../../../Firebase/Firebase.config";
const TodoTable = ({ isLoading, todos, refetch }) => {
  /* handle delete todo */
  const handleDeleteTodo = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/todos?todoId=${id}&&uid=${auth?.currentUser?.uid}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleCompleteTodo = async (id) => {
    await fetch(
      `http://localhost:5000/todos?todoId=${id}&&uid=${auth?.currentUser?.uid}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          refetch();
        }
      });
  };

  return (
    <div className="m-10">
      <label htmlFor="my-modal-3" className="btn btn-primary mb-4 modal-button">
        Add Task
      </label>
      <div className="overflow-x-auto">
        {!isLoading ? (
          todos?.result?.length > 0 ? (
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
                {todos?.result?.map((todo, ind) => (
                  <tr key={todo._id}>
                    <td
                      style={{
                        textDecoration: `${todo.completed && "line-through"}`,
                      }}
                    >
                      {ind + 1}
                    </td>
                    <td
                      style={{
                        textDecoration: `${todo.completed && "line-through"}`,
                      }}
                    >
                      {todo.title}
                    </td>
                    <td
                      style={{
                        textDecoration: `${todo.completed && "line-through"}`,
                      }}
                    >
                      {todo.desc}
                    </td>
                    <td>
                      <button
                        onClick={() => handleCompleteTodo(todo._id)}
                        className={`btn bg-green-500 text-white border-green-400 btn-sm `}
                        disabled={todo?.completed && true}
                      >
                        {todo?.completed ? "Completed" : "Complete"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteTodo(todo._id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl mb-4">No ToDos Found yet.</h3>
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary mb-4 modal-button"
              >
                Add New Task
              </label>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default TodoTable;
