import styles from "./register.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ClipLoader from "react-spinners/PropagateLoader";
import Api from "../../api/api";
import bgSignup from "images/auth/bg-signup.png";
import bg6 from "/images/auth/bg6.png";
import bg7 from "/images/auth/bg7.png";
import Link from "next/link";
import {
  InputEmail,
  InputName,
  InputPassword,
} from "@/components/authpage/auth";
import PreLoader from "@/components/preloader/Preloader";

function Login() {
  const router = useRouter();
  const [formData, setSignupForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const eyeHandle = () => {
    setVisible(!visible);
  };

  const submitHandle = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await Api.userRegister(formData);
    if (res.status === 201) {
      setSignupForm({ fullname: "", email: "", password: "" });
      setLoading(false);
      router.push("/login");
    } else {
      setLoading(false);
      setSignupForm({ fullname: "", email: "", password: "" });
    }
  };

  const setInputHandle = (e: any) => {
    setSignupForm((obj) => ({ ...obj, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PreLoader />
      <div
        className={`bg-transparent w-full h-full flex justify-center flex-col md:flex-row bg-no-repeat bg-left m-auto sm:mx-auto ${styles.box_Container}`}
      >
        <div className="bg-transparent mx-auto md:mx-0 w-full flex justify-center items-center">
          <div
            className="bg-transparent justify-end items-center w-full flex flex-col md:flex-row  md:mx-auto xs:mx-auto"
            style={{ margin: "2vw auto 1vw" }}
          >
            <div className="rounded-3xl w-full max-w-[550px] h-full sm:h-1/2 md:h-3/3 lg:h-3/4 xl:h-3/5 2xl:h-4/6  flex flex-col items-center border-double border-transparent bg-gradient-to-br from-[#1c1e24] to-[#0c0c0e] bg-clip-content, border-box">
              <div className="font-semibold my-1vw text-6xl leading-[72px] text-white">
                Create Account
              </div>
              <form
                onSubmit={submitHandle}
                className="w-7/10 flex flex-col justify-center items-center"
              >
                {InputName({ setInputHandle, formData })}
                {InputEmail({ setInputHandle, formData })}
                {InputPassword({
                  setInputHandle,
                  formData,
                  visible,
                  eyeHandle,
                })}

                <button
                  className="button btn-form_ px-0 w-full max-w-xs h-14 outline-none self-center text-decoration-none cursor-pointer bg-gradient-to-b from-red-500 to-purple-700 rounded-full text-white font-semibold text-lg border border-blue-500 capitalize"
                  type="submit"
                >
                  {loading ? <span></span> : "Create Account"}
                  <ClipLoader color={"#ffff"} loading={loading} size={10} />
                </button>
              </form>
              <div className="already  flex w-full my-6 max-w-xs justify-between items-center font-semibold text-sm leading-6 text-gray-400 max-w-[240px]">
                <span>Already have an account?</span>
                <Link href="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
