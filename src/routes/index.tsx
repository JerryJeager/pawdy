import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn1 from "../pages/auth/SignIn1";
import Signin2 from "../pages/auth/Signin2";
import Signin3 from "../pages/auth/Signin3";
import Chat from "../pages/chat/ChatPage";


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
  },
  {
    path: "/sign-in/3",
    element: <Signin3 />
  },
  {
    path: "/chat",
    element: <Chat />
  }
]);

export default router;
