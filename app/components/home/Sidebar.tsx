import React from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Mail } from "lucide-react";

const sidebar = () => {
  return (
    <div className="max-sm:fixed absolute top-5 right-5 flex gap-4 z-50">
      <a href="mailto:abhishekjangid.3224@gmail.com">
        <Mail className="text-white size-9 cursor-pointer rounded-xs" />
      </a>

      <a
        href="https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        <RiLinkedinBoxFill className="text-white size-9 cursor-pointer rounded-xs" />
      </a>
    </div>
  );
};

export default sidebar;
