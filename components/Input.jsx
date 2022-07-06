import { PhotographIcon, XIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(true);
  const filePickerRef = useRef();
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll `}
    >
      <img
        src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows={2}
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input type="file" className="hidden" ref={filePickerRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
