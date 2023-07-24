import { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  InputEmail,
  InputName,
  InputPassword,
  Select,
} from "@/components/authpage/auth";
import { Picture } from "@/components/profile/Picture";
import {
  updatePasswordAction,
  updateProfileAction,
} from "@/store/actions/userAction";

interface ProfileFormValues {
  avatar?: string;
  fullname?: string;
  email?: string;
  gender?: string;
}

interface PasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const EditProfileSchema = Yup.object().shape({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  gender: Yup.string().required("Required"),
});

const PasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required"),
  newPassword: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Required"),
});

function EditProfileForm() {
  const { user } = useSelector((state: RootState) => ({
    user: state.users.user?.user,
  }));

  const profileFormik = useFormik<ProfileFormValues>({
    initialValues: {
      avatar: user?.avatar || "",
      fullname: user?.fullname || "",
      email: user?.email || "",
      gender: user?.gender || "female",
    },
    validationSchema: EditProfileSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      if (values.email) formData.append("email", values.email);
      if (values.fullname) formData.append("fullname", values.fullname);
      if (values.gender) formData.append("gender", values.gender);
      if (values.avatar) formData.append("image", values.avatar as any); // casting is necessary as blob is expected
      updateProfileAction(formData);
    },
  });

  const passwordFormik = useFormik<PasswordFormValues>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: PasswordSchema,
    onSubmit: async (values) => {
      updatePasswordAction(values);
      passwordFormik.resetForm();
    },
  });

  useEffect(() => {
    profileFormik.setValues({
      avatar: user?.avatar || "",
      fullname: user?.fullname || "",
      email: user?.email || "",
      gender: user?.gender || "female",
    });
  }, [user]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-7/10">
        <FormikProvider value={profileFormik}>
          <form onSubmit={profileFormik.handleSubmit}>
            <Picture avatar={user ? user.avatar : ""} />
            <InputName />
            <InputEmail />
            <Select name="gender" label="Gender" />
            <button
              className="button btn-form_ px-0 w-full max-w-xs h-14 outline-none self-center text-decoration-none cursor-pointer bg-gradient-to-b from-red-500 to-purple-700 rounded-full text-white font-semibold text-lg border border-blue-500 capitalize"
              type="submit"
              disabled={profileFormik.isSubmitting}
            >
              Update Profile
            </button>
          </form>
        </FormikProvider>
      </div>
      <div className="w-7/10 my-2">
        <FormikProvider value={passwordFormik}>
          <form onSubmit={passwordFormik.handleSubmit}>
            {/* You will need to convert `InputPassword` component to its TypeScript version */}
            <InputPassword name="oldPassword" label="Old Password" />
            <InputPassword name="newPassword" label="New Password" />
            <InputPassword name="confirmPassword" label="Confirm Password" />
            <button
              type="submit"
              className="button btn-form_ px-0 w-full max-w-xs h-14 outline-none self-center text-decoration-none cursor-pointer bg-gradient-to-b from-red-500 to-purple-700 rounded-full text-white font-semibold text-lg border border-blue-500 capitalize"
              disabled={passwordFormik.isSubmitting}
            >
              Update Password
            </button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}

export default EditProfileForm;
