import React from "react";
import "./App.css";
import Header from "./components/header";
import SignIn from "./components/signIn";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <SignIn />
      </main>
    </div>
  );
}

export default App;
