import { Store } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  store: Store;
  children?: React.ReactNode;
}

export const ReduxProvider: React.FC<Props> = ({ store, children }) => {
  return <Provider store={store}>{children} </Provider>;
};
