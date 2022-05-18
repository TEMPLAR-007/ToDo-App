import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = ({ loading }) => {
  return (
    <div className="text-center py-20">
      <HashLoader color={"#00A4E8"} loading={loading} size={80} />
    </div>
  );
};

export default Loader;
