import { useCallback, useRef, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components";

export default function Join() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const mobileRef = useRef<HTMLInputElement | null>(null);
  const birthRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const join = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current?.value === '') {
      nameRef.current?.focus();
      return;
    }
    if (idRef.current?.value === '') {
      idRef.current?.focus();
      return;
    }
    if (passRef.current?.value === '') {
      passRef.current?.focus();
      return;
    }
    if (mobileRef.current?.value === '') {
      mobileRef.current?.focus();
      return;
    }
    if (birthRef.current?.value === '') {
      birthRef.current?.focus();
      return;
    }
    // Add join logic here
    alert('Join successful!');
    navigate('/board/login'); // Navigate to login after joining
  }, [navigate]);

  return (
    <section className="w-full max-w-md p-8 mx-auto mt-4 space-y-4 bg-white rounded-lg shadow-lg">
      <Title>회원가입</Title>
      <form onSubmit={join} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">이름</span>
          </label>
          <input type="text" ref={nameRef} placeholder="Enter your name" className="w-full input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">아이디</span>
          </label>
          <input type="text" ref={idRef} placeholder="Enter your ID" className="w-full input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">비밀번호</span>
          </label>
          <input type="password" ref={passRef} placeholder="Enter your password" className="w-full input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">전화번호</span>
          </label>
          <input type="text" ref={mobileRef} placeholder="Enter your mobile number" className="w-full input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">생년월일</span>
          </label>
          <input type="text" ref={birthRef} placeholder="YYYY-MM-DD" className="w-full input input-bordered" />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="w-full btn btn-primary">
            Join
          </button>
        </div>
      </form>
    </section>
  );
}