import { AiFillThunderbolt } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

export default function LoginBtn({ login = false, titel }: { arrow?: boolean; titel: string; login?: boolean }) {
  return (
    <button className={` ${login ? "btnLight border-1 border-primery " : " btnBlue "}   flex items-center gap-0 px-10 py-3  `}>
      {login ? <CiLogin className="text-2xl" /> : <AiFillThunderbolt className="ml-2" />}
      {titel}
    </button>
  );
}
