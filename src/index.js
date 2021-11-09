import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Paperbase from "./Paperbase";
import Header from "./Header";
import Navigator from "./Navigator";
import Content from "./Content";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navigator />
    <Paperbase />
    <Header />
    <Content />
  </StrictMode>,
  rootElement
);
