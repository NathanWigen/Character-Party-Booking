import "./App.css";
import React from "react";
import { BrowserRouter as Route} from "react-router-dom";

import Layout from "./Componets/Layout/Layout";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <Layout>
      <main className="app-main">
        <Route>
          <Home />
        </Route>
      </main>
    </Layout>
  );
}

export default App;
