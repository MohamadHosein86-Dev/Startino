import { AiFillThunderbolt } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

export default function LoginBtn({ login = false }: { login?: boolean }) {
  return (
    <button className={` ${login ? "btnLight border-1 border-primery " : " btnBlue "}   flex items-center gap-0 px-10 py-3  `}>
      {login ? "ورود/ثبت نام" : "رایگان شروع کن!"}
      {login ? <CiLogin className="text-2xl" /> : <AiFillThunderbolt className="ml-2" />}
    </button>
  );
}
