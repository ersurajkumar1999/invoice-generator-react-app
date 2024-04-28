import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.min.css";
import { Navbar } from "./components/index.js";
const InvoiceGenerator = lazy(() =>
  import("./views/invoice-generator/invoice-generator")
);
const InvoiceList = lazy(() => import("./views/invoice-list/invoice-list"));
const Settings = lazy(() => import("./views/settings/settings"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <div className="container-fluid">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/" element={<InvoiceGenerator />} />
                <Route path="/invoices" element={<InvoiceList />} />
                <Route path="/settings" element={<Settings />} />
                <Route render={() => <h1>404 Error</h1>} />
              </Routes>
            </Suspense>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
