import React from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import { auth } from "../../../Firebase/Firebase.config";
const TodoTable = ({ isLoading, todos, refetch, setUpdatedata }) => {

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
      {todos?.result?.length > 0 && (
        <label
          htmlFor="my-modal-3"
          className="btn btn-primary mb-4 modal-button"
        >
          Add Task
        </label>
      )}

      <div className="overflow-x-auto">
        {!isLoading ? (
          todos?.result?.length > 0 ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Due date</th>
                  <th>Details</th>
                  <th>Edit</th>
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
                    <td
                      style={{
                        textDecoration: `${todo.completed && "line-through"}`,
                      }}
                    >
                      {todo.createAt}
                    </td>
                    <td>
                      <>

                        <label htmlFor="view-modal-3" className="btn bg-transparent border-none"><img width={25} src="https://img.icons8.com/flat-round/256/info.png" alt="" /></label>


                        <input type="checkbox" id="view-modal-3" className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box relative">
                            <label htmlFor="view-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <p><span className="font-bold text-warning">Title:</span>  {todo.title}</p>
                            <br />
                            <p><span className="font-bold text-warning">Desc:</span>  {todo.desc}</p>
                            <br />
                            <p><span className="font-bold text-warning">Create-Date:</span>  {todo.createAt}</p>
                          </div>
                        </div>

                      </>
                    </td>

                    <td>
                      <label htmlFor="update-modal-3" className="btn bg-transparent border-none" onClick={() => setUpdatedata(todo)}
                        disabled={todo?.completed && true}
                      >
                        <img width={30} src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/256/external-edit-interface-kiranshastry-lineal-color-kiranshastry-1.png" alt="" />
                      </label>
                    </td>

                    <td>
                      <button
                        onClick={() => handleCompleteTodo(todo._id)}
                        // className={`btn bg-green-500 text-white border-green-400 btn-sm `}
                        disabled={todo?.completed && true}
                      >
                        {todo?.completed ? <input type="checkbox" checked="checked" className="checkbox" /> : <input type="checkbox" checked className="checkbox checkbox-success" />}
                      </button>

                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteTodo(todo._id)}
                        className="btn btn-error btn-sm"
                      >
                        <img width={25} src="https://img.icons8.com/material-sharp/256/delete-trash.png" alt="" />
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
          <Loader loading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default TodoTable;
