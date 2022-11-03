import "./App.css";
import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import Layout from "./Componets/Layout/Layout";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <Layout>
      <main>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route>
          <Home />
        </Route>
      </main>
    </Layout>
  );
}

export default App;
