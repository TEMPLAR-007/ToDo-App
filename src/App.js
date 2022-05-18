import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ToDos from "./Pages/ToDos/ToDos";

function App() {
    
  return (
    <section data-theme="night" className="bg-base-100">
        <Routes>
            {/* normal routes  */}
            <Route path="/login" element={<Login />}/>
            {/* Protected Route  */}
            {/* <Route path="/" element={<RequireAuth><ToDos /></RequireAuth>}/> */}
            <Route path="/" element={<ToDos  />}/>
        </Routes>
    
    </section>
  );
}

export default App;
