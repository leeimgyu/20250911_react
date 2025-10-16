import { useCallback, useRef, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components";

export default function Login() {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const login = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current?.value === '') {
      idRef.current?.focus();
      return;
    }
    if (passRef.current?.value === '') {
      passRef.current?.focus();
      return;
    }
    // Add login logic here

    navigate('/'); // Navigate to home or dashboard after login
  }, [navigate]);

  return (
    <section className="w-full max-w-md p-8 mx-auto mt-4 space-y-4 bg-white rounded-lg shadow-lg">
      <Title>Login</Title>
      <form onSubmit={login} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">아이디</span>
          </label>
          <input
            type="text"
            ref={idRef}
            placeholder="Enter your ID"
            className="w-full input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input
            type="password"
            ref={passRef}
            placeholder="Enter your password"
            className="w-full input input-bordered"
          />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="w-full btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </section>
  );
}