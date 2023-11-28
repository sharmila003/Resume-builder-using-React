
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detailsfilling from "./Pages/Detailsfilling";
import CheckselectedId from "./components/CheckselectedId";
import AboutUs from "./Pages/AboutUs";
import MyResume from "./Pages/MyResume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckselectedId>
              <Detailsfilling />
            </CheckselectedId>
          }
        />

        <Route exact path="/my/resumes" element={<MyResume />} />

        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;


