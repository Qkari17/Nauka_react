import "./App.css";
import {
  Generator,
  Counter,
  RegistrationFormState,
  RegistrationFormRefs,
  RegistrationFormRefsHookForm,
  ViewPort,
} from "./components";
import { AuthContext,AuthContextProvider } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";

function App() {
  return (
    <>
      <Generator></Generator>
      <Counter></Counter>
      {/* <RegistrationFormState></RegistrationFormState> */}
      {/* <RegistrationFormRefs></RegistrationFormRefs> */}
      <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm>
      <ViewPort></ViewPort>
      <AuthContextProvider>
        <AuthInfo></AuthInfo>
      </AuthContextProvider>
    </>
  );
}

export default App;
