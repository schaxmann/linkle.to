import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Embed from "./components/Embed";
import Header from "./components/Header";
import Splash from "./components/Splash";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Splash />
              </>
            }
          ></Route>
          <Route path="list" element={<Embed />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
