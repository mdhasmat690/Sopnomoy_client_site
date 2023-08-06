import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { checkAuthState } from "./features/auth/authSlice";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </div>
  );
}

export default App;
