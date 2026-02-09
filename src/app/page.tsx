import React from "react";
import { Provider } from "react-redux";
import { store } from "../context/store";

const page = () => {
  return (
    <Provider store={store}>
      <div>page</div>
    </Provider>
  );
};

export default page;
