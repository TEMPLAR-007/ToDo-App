import React from "react";
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
                    <td>{ind + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.desc}</td>
                    <td>
                      <button className="btn bg-green-500 text-white border-green-400 btn-sm">
                        Complete
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
