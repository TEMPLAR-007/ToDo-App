import React from "react";

const TodoBox = () => {
  return (
    <div>
      <form action="" className="flex items-stretch gap-1 justify-center">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              for="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Add You Task</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="my-3">
              <label htmlFor="title">ToDo Title</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="my-3">
              <label htmlFor="title">ToDo Description</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoBox;
