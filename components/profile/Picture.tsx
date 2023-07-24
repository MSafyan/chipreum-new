import React, { useState, ChangeEvent } from "react";
import { useField, useFormikContext } from "formik";
import pencil from "images/icon/pencil.png";
import NextImage from "next/image";

interface PictureProps {
  avatar: string;
}

export const Picture: React.FC<PictureProps> = ({ avatar }) => {
  const { setFieldValue } = useFormikContext();

  const [avatarPreview, setAvatarPreview] = useState(avatar);

  const setAvatarHandle = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files && e.target.files[0];
    if (file) {
      // Update to show a preview
      let reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setAvatarPreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      // Update the value of 'avatar' in Formik's state to be the File object
      setFieldValue("avatar", file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-32 h-32 border rounded-full overflow-hidden">
        <NextImage src={avatarPreview} alt="avatar" fill />
        <input
          onChange={setAvatarHandle}
          name="avatar"
          type="file"
          className="absolute opacity-0 cursor-pointer w-full h-full"
          id="images"
          accept="image/png,image/jpg,image/jpeg,image/gif"
        />
        <div className="absolute bottom-0 right-0 p-2 h-3 w-3">
          <NextImage src={pencil.src} alt="avatar" fill />
        </div>
      </div>
      <p className="text-gray-700 text-sm">Upload New Image</p>
      <p className="text-gray-500 text-xs">
        Maximum size allowed is 2 MB of PNG, JPEG, JPG
      </p>
    </div>
  );
};
