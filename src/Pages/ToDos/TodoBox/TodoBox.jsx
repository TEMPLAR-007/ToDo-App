import React from "react";

const TodoBox = ({ handleCreateToDos }) => {
  return (
    <div>
      <form
        onSubmit={handleCreateToDos}
        action=""
        className="flex items-stretch gap-1 justify-center"
      >
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Add Your Task</h3>
            <p className="py-4 text-warning">
              “ Each day I will accomplish one thing on my to do list. ”
            </p>
            <div className="my-3">
              <label htmlFor="title" className="my-1 text-sm">
                ToDo Title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                name="title"
              />
            </div>
            <div className="my-3">
              <label htmlFor="title" className="my-1 text-sm">
                ToDo Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="ToDo description"
                name="desc"
              ></textarea>
            </div>
            <div>
              <button className="btn bg-sky-500 text-white">Add Task</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoBox;
