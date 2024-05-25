import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
  Link,
} from "react-router-dom";

import React from "react";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
