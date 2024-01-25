import { LuUpload } from "react-icons/lu";

import excel from "/excel.png";

export default function Upload({ getRootProps, getInputProps, isDragActive }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center p-2">
      <h2 className="mb-3 font-semibold text-xl md:hidden">Upload csv</h2>
      <div className=" md:w-[596px] h-fit min-h-[400px] bg-white rounded-md flex flex-col justify-center items-center">
        <div className="flex justify-center items-center my-2 w-full md:w-[570px] md:border-2 border-dotted border-gray-400 h-fit min-h-[330px] rounded-md ">
          <div
            {...getRootProps()}
            className="w-full h-fit min-h-[250px] flex flex-col items-center justify-center"
          >
            <img src={excel} alt="excel" className="h-14 w-18" />
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-sm text-gray-400">Drop the files here</p>
            ) : (
              <p className="text-sm text-gray-400">
                Drag your excel sheet here or{" "}
                <span className="text-blue-500 cursor-pointer">browse</span>
              </p>
            )}
          </div>
        </div>
        <button
          disabled={isDragActive}
          {...getRootProps()}
          className={`flex items-center justify-center gap-2 w-full md:w-[570px] p-2 rounded-lg text-white mb-1 ${
            isDragActive
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <p className="flex items-center gap-1">
            <LuUpload /> Upload
          </p>
          <input {...getInputProps()} className="opacity-0 w-0 h-0 absolute" />
        </button>
      </div>
    </div>
  );
}
