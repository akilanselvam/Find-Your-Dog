import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./Components/Header-Component/Header";
import Homepage from "./Components/HomePage-Component/Homepage";
import Cards from "./Components/Cards-Component/Cards";
import Footer from "./Components/Footer-Component/Footer";
import SideNav from "./Components/Side-Nav/SideNav";
import ViewSingleCardComponent from "./Components/ViewSingleCardComponent/ViewSingleCardComponent";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="side" element={<SideNav />} />
          <Route path="/cards/:id" element={<ViewSingleCardComponent />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
