import { useEffect } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      document.documentElement.classList.add("dark");
    } else {
      // Theme set to light.
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <>
      {/* <SignIn /> */}
      <SignUp />
    </>
  );
};

export default App;
