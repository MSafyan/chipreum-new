import styles from "./register.module.css";
import { useState } from "react";
import ClipLoader from "react-spinners/PropagateLoader";
import Link from "next/link";
import {
  InputEmail,
  InputName,
  InputPassword,
} from "@/components/authpage/auth";
import PreLoader from "@/components/preloader/Preloader";
import * as Yup from "yup";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { signUp } from "@/store/actions/userAction";
import { FormikProvider, useFormik } from "formik";

function Register() {
  const [visible, setVisible] = useState(false);

  const storeState = (state: RootState) => ({
    loading: state.users.user.loading,
  });
  const { loading } = useSelector(storeState);

  const eyeHandle = () => {
    setVisible(!visible);
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await signUp(values);
    },
  });

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
              <FormikProvider value={formik}>
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-7/10 flex flex-col justify-center items-center"
                >
                  <InputName />
                  <InputEmail />
                  <InputPassword
                    visible={visible}
                    eyeHandle={eyeHandle}
                    name="password"
                  />
                  <button
                    className="button btn-form_ px-0 w-full max-w-xs h-14 outline-none self-center text-decoration-none cursor-pointer bg-gradient-to-b from-red-500 to-purple-700 rounded-full text-white font-semibold text-lg border border-blue-500 capitalize"
                    type="submit"
                  >
                    {loading ? <span></span> : "Create Account"}
                    <ClipLoader color={"#ffff"} loading={loading} size={10} />
                  </button>
                </form>
              </FormikProvider>
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

export default Register;

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
