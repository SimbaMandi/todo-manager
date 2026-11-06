import { useState, type FormEvent } from "react";

interface RegisterProps {
  onSwitch: () => void;
}

function Register({ onSwitch }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
      <h1 className="mb-8 text-3xl font-bold text-[#0b1a2e]">Create your account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="mb-2 block font-semibold text-[#0b1a2e]">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#00ef63]"
        />

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
          Register Now
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500">
        Already have an account?{" "}
        <button onClick={onSwitch} className="font-semibold text-[#00ef63]">
          Log in
        </button>
      </p>
    </div>
  );
}

export default Register;