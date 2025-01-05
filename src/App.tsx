import "./App.css";
import {
  Generator,
  Counter,
  RegistrationFormState,
  RegistrationFormRefs,
  RegistrationFormRefsHookForm,
  ViewPort,
} from "./components";

function App() {
  return (
    <>
      <Generator></Generator>
      <Counter></Counter>
      {/* <RegistrationFormState></RegistrationFormState> */}
      {/* <RegistrationFormRefs></RegistrationFormRefs> */}
      <RegistrationFormRefsHookForm></RegistrationFormRefsHookForm>
      <ViewPort></ViewPort>
    </>
  );
}

export default App;
