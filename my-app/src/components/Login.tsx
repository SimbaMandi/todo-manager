import { useState, type FormEvent } from "react";

interface LoginProps {
  onSwitch: () => void;
}

function Login({ onSwitch }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
      <h1 className="mb-8 text-3xl font-bold text-[#0b1a2e]">Welcome back</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="mb-2 block font-semibold text-[#0b1a2e]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#00ef63]"
        />

        <label htmlFor="password" className="mb-2 block font-semibold text-[#0b1a2e]">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-8 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#00ef63]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#00ef63] py-4 text-lg font-bold text-[#0b1a2e] hover:opacity-90"
        >
          Log In
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500">
        Don't have an account?{" "}
        <button onClick={onSwitch} className="font-semibold text-[#00ef63]">
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;