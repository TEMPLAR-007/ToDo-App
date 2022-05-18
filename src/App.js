import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import useFirebase from "./Hooks/useFirebase";
import Login from "./Pages/Login/Login";
import ToDos from "./Pages/ToDos/ToDos";

export const AuthContext = createContext(null)
function App() {
    const {user, isAuth} = useFirebase();
  return (
    <AuthContext.Provider value={{user, isAuth}}>
        <Routes>
            {/* normal routes  */}
            <Route path="/login" element={<Login />}/>
            {/* Protected Route  */}
            {/* <Route path="/" element={<RequireAuth><ToDos /></RequireAuth>}/> */}
            <Route path="/" element={<ToDos  />}/>
        </Routes>
    
    </AuthContext.Provider>
  );
}

export default App;
