import { useState, type ChangeEvent } from "react";

interface ProfileImageUploadProps {
  value?: string; // initial image URL
  onChange?: (file: File | null) => void; // callback when image selected
  size?: number; // width & height in pixels
  className?: string; // additional classes
  placeholder?: string; // default image placeholder
}

export default function ProfileImageUpload({
  value,
  onChange,
  className = "",
  placeholder = "/default-avatar.png",
}: ProfileImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setPreview(null); // reset preview if no file selected
      onChange?.(null);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    onChange?.(file);
  };

  return (
    <div
      className={`flex relative flex-col items-center gap-2 w-25 h-25 mx-auto ${className}`}
    >
      <div className="relative rounded-full border-2 border-gray-300 overflow-hidden w-25 h-25">
        <img
          src={preview || placeholder}
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <label
        htmlFor="profile-upload"
        className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition
                   flex items-center justify-center border-2 border-white"
      >
        ✎
      </label>

      <input
        type="file"
        id="profile-upload"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}
