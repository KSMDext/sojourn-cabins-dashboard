import React from "react";
import { BrowserRouter,  } from "react-router-dom";



import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

import ApplicationRoutes from "./routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
