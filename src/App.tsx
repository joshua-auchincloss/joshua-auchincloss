import { Routes, Route } from "solid-app-router";
import type { Component } from "solid-js";
import NavBar from "./Navbar";
import AboutMe from "./pages/about";
import Footer from "./Footer";
import Dne from "./pages/dne";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <NavBar />
      <div class="mb-auto">
        <Routes>
          <Route path={""} component={AboutMe} />
          <Route path={"/about"} component={AboutMe} />
          <Route path="/*" component={Dne}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
