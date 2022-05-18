import React from "react";

const TodoTable = () => {
  return (
    <div className="m-10">
      <label htmlFor="my-modal-3" className="btn btn-primary mb-4 modal-button">
        Add Task
      </label>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn bg-green-500 text-white border-green-400 btn-sm">
                  Complete
                </button>
              </td>
              <td>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn bg-green-500 text-white border-green-400 btn-sm">
                  Complete
                </button>
              </td>
              <td>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn bg-green-500 text-white border-green-400 btn-sm">
                  Complete
                </button>
              </td>
              <td>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoTable;
