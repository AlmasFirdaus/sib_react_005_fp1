import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const IsPending = () => {
  return (
    <div className="container h-screen flex justify-center items-center">
      <InfinitySpin width="200" color="#03506F" />
    </div>
  );
};

export default IsPending;
