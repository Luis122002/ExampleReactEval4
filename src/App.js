import {Routes, Route } from "react-router-dom";
import BlockOne from "./component/BlockOne.js";
import Paginaweb from "./component/Paginaweb.js";



function App() {
  return (
   <Routes>
    <Route path="/pagina2" element={<BlockOne />} />

    <Route path="/" element={<Paginaweb />} />
   </Routes>
  )

}

export default App;

//<Route path="/" element={<BlockOne />} />
//<Route path="/" element={<Paginaweb />} />
