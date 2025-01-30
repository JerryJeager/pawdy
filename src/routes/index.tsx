import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn1 from "../pages/auth/SignIn1";
import Signin2 from "../pages/auth/Signin2";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in/1", 
    element: <SignIn1/>
  },
  {
    path: "/sign-in/2",
    element: <Signin2 />
  }
]);

export default router;
