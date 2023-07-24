import styles from "./Login.module.css";
import { useState } from "react";
import ClipLoader from "react-spinners/PropagateLoader";
import Link from "next/link";
import { InputEmail, InputPassword } from "@/components/authpage/auth";
import PreLoader from "@/components/preloader/Preloader";
import { signIn } from "@/store/actions/userAction";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

function Login() {
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
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await signIn(values);
    },
  });

  return (
    <>
      <PreLoader />
      <div
        className={`bg-transparent w-full h-full flex justify-center flex-col md:flex-row bg-no-repeat bg-contain bg-left m-auto sm:my-8 sm:mx-auto sm:mb-7 ${styles.box_Container}`}
      >
        <div className="mx-auto flex flex-col justify-start w-full h-auto max-w-[1330px]">
          <div
            className="bg-transparent justify-end items-center w-full flex flex-col md:flex-row md:my-16 md:mx-auto xs:my-2.5 xs:mx-auto"
            style={{ margin: "65px auto 20px" }}
          >
            <div className="rounded-3xl w-full max-w-[550px] h-full sm:h-1/2 md:h-3/3 lg:h-3/4 xl:h-3/5 2xl:h-4/6  flex flex-col items-center border-double border-transparent bg-gradient-to-br from-[#1c1e24] to-[#0c0c0e] bg-clip-content, border-box">
              <div className="font-semibold my-12 text-6xl leading-[72px] text-white">
                Log in
              </div>
              <FormikProvider value={formik}>
                <form
                  onSubmit={formik.handleSubmit}
                  className="w-7/10 flex flex-col justify-center items-center"
                >
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
                    {loading ? <span></span> : "Login"}
                    <ClipLoader color={"#ffff"} loading={loading} size={10} />
                  </button>
                </form>
              </FormikProvider>
              <div className="already flex w-full my-6 max-w-xs justify-between items-center font-semibold text-sm leading-6 text-gray-400">
                <span>Not a member?</span>
                <Link href="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default Login;
