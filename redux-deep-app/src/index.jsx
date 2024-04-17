import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
