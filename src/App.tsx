import "./App.scss";
import { Banner } from "./components/Banner";
import { NavBar } from "./components/Navbar";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
    </>
  );
};
