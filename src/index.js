import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouterView from "@components/RouterView";
import store from "@store";
import "@/style/reset.scss";
import "@/style/common.scss";
import "@/style/pages.scss";
import "@/style/lib/font-awesome/css/font-awesome.min.css";

const Root = document.getElementById("root");

const App = () => {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  );
};

ReactDOM.render(<App />, Root);
