import React from "react";
import { LoadWrapper } from "./Loading.styled";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <LoadWrapper>
      <ClipLoader color="#1ea4ce" size={35} />
    </LoadWrapper>
  );
};

export default Loading;
