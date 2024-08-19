import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePages.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {

  return (
   <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>} >
              <Route path="/" element={<HomePage/>} />
          </Route>
       </Routes>
   </BrowserRouter>
  );
}

export default App
