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
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
        />

        <label htmlFor="email" className="mb-2 block font-semibold text-[#0b1a2e]">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
        />

        <label htmlFor="password" className="mb-2 block font-semibold text-[#0b1a2e]">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-8 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
        />

        <button
          type="submit"
          className="w-full rounded-none bg-red-600 py-4 text-lg font-bold text-white hover:bg-red-700"
        >
          Register Now
        </button>
      </form>

      <p className="mt-6 text-center text-gray-500">
        Already have an account?{" "}
        <button onClick={onSwitch} className="font-semibold text-red-600">
          Log in
        </button>
      </p>
    </div>
  );
}

export default Register;
