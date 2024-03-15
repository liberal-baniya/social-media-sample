import React from "react"; 
import "./styles/color.css"; 
import "./styles/font.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css"; 
import "./styles/tailwind.css"; 
// ReactDOM.render(
//  <React.StrictMode>
//   <App/>
//  </React.StrictMode>, 
//  document.getElementById("root"),
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>
);