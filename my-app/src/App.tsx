import { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      {view === "login" ? (
        <Login onSwitch={() => setView("register")} />
      ) : (
        <Register onSwitch={() => setView("login")} />
      )}
    </div>
  );
}

export default App;