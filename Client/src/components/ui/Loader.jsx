import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#14E35C"
      cssOverride={{
        position: "fixed",
        top: "60%",
        right: "50%",
        translate: "50% 0",
      }}
    />
  );
};

export default Loader;
