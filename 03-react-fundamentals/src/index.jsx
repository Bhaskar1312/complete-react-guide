import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import App2 from "./App2";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(<App2 />);
