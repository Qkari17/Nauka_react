import "./App.css";
import {
  Generator,
  Counter,
  RegistrationFormState,
  RegistrationFormRefs,
  RegistrationFormRefsHookForm,
  ViewPort,
} from "./components";
import {
  AuthContext,
  AuthContextProvider,
} from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";

function App() {
  return (
    <>
      <ThemeContextProvider>
      <ThemeSwitcher></ThemeSwitcher>
        <Generator></Generator>
        <Counter></Counter>
        {/* <RegistrationFormState></RegistrationFormState> */}
        {/* <RegistrationFormRefs></RegistrationFormRefs> */}
        <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm>
        <ViewPort></ViewPort>
        <AuthContextProvider>
          <AuthInfo></AuthInfo>
        </AuthContextProvider>
            </ThemeContextProvider>
    </>
  );
}

export default App;
