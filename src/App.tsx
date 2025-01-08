import { RouterProvider } from "react-router-dom";
import {Provider} from "react-redux"
import "./App.css";
import { ViewPort } from "./components";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { ThemeContextProvider } from "./components/Theme/ThemeContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { router } from "./routes";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { store } from "./store";

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={<p className="dark:text-slate-300">Oh no! General error</p>}
      >
        <Provider store={store}>
        <ThemeContextProvider>
          <RouterProvider router={router}></RouterProvider>
          <ThemeSwitcher></ThemeSwitcher>
          <ViewPort></ViewPort>
          <AuthContextProvider>
            <AuthInfo></AuthInfo>
          </AuthContextProvider>
          <ErrorBoundary>
            <AuthInfo></AuthInfo>
          </ErrorBoundary>
        </ThemeContextProvider>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
