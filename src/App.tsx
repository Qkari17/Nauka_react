import "./App.css";
import {
  Generator,
  Counter,
  RegistrationFormState,
  RegistrationFormRefs,
  RegistrationFormRefsHookForm,
  ViewPort,
} from "./components";
import { AuthContext } from "./components/Auth/AuthContext";
import { Authinfo } from "./components/Auth/AuthInfo";

function App() {
  return (
    <>
      <Generator></Generator>
      <Counter></Counter>
      {/* <RegistrationFormState></RegistrationFormState> */}
      {/* <RegistrationFormRefs></RegistrationFormRefs> */}
      <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm>
      <ViewPort></ViewPort>
      <AuthContext.Provider value={{isLoggedIn}}>
      <Authinfo></Authinfo>
      </AuthContext.Provider>
    </>
  );
}

export default App;
