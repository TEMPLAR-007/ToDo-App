import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import Login from "./Pages/Login/Login";
import ToDos from "./Pages/ToDos/ToDos";

function App() {
  return (
    <>
      <Routes>
          {/* normal routes  */}
          <Route path="/login" element={<Login />}/>

          {/* Protected Route  */}
          <Route path="/" element={<RequireAuth><ToDos /></RequireAuth>}/>


      </Routes>
    </>
  );
}

export default App;
