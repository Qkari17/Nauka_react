import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ViewPort } from "./components";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { router } from "./routes";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ThemeSwitcher></ThemeSwitcher>
        {/* <Generator></Generator> */}
        {/* <Counter></Counter> */}
        {/* <RegistrationFormState></RegistrationFormState> */}
        {/* <RegistrationFormRefs></RegistrationFormRefs> */}
        {/* <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm> */}
        <ViewPort></ViewPort>
        <AuthContextProvider>
          <AuthInfo></AuthInfo>
        </AuthContextProvider>
        {/* <Stepper></Stepper> */}
      </ThemeContextProvider>
    </>
  );
}

export default App;
