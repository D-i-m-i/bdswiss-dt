import React from "react";
import ReactDOM from "react-dom/client";

import { define } from "remount";
import Hello from "./components/Hello";
import New from "./components/New";

define({ "hello-component": Hello });
define({ "new-component": New });

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div>
      <h1>Hi my human friend!</h1>
    </div>
  );
}

root.render(<App />);
