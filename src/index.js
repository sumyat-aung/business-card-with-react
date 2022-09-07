import React from "react";
import ReactDOM from "react-dom/client";
import Top from "./Top";
import Content from "./Content";
import Footer from "./Footer";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div className="app">
      <Top />
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);
