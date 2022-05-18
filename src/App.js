import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import useFirebase from "./Hooks/useFirebase";
import Login from "./Pages/Login/Login";
import ToDos from "./Pages/ToDos/ToDos";

export const AuthContext = createContext(null)
function App() {
    const {user, isAuth} = useFirebase();
  return (
      <>
       <Toaster />
        <AuthContext.Provider value={{user, isAuth}}>
            <Routes>
                {/* normal routes  */}
                <Route path="/login" element={<Login />}/>
                {/* Protected Route  */}
                <Route path="/" element={<RequireAuth><ToDos /></RequireAuth>}/>
            </Routes>
        
        </AuthContext.Provider>
     </>
  );
}

export default App;
