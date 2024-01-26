import Upload from "./Upload";
import UploadedFiles from "./UploadedFiles";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

// to accept only excel files

const acceptedFileTypes = [
  "application/vnd.ms-excel",
  "application/vnd.ms-excel.sheet.macroEnabled.12",
  "application/msexcel",
  "application/x-msexcel",
  "application/x-ms-excel",
  "application/x-excel",
  "application/x-dos_ms_excel",
  "application/xls",
  "application/x-xls",
  "application/x-msi",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

export default function Content({ navItem }) {
  const [data, setData] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      const textDecoder = new TextDecoder();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryData = reader.result;
        const jsonStr = textDecoder.decode(binaryData);
        const dataArray = jsonStr.split("\r\n1");
        setData(dataArray.length > 0 ? dataArray : []);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: acceptedFileTypes.join(","),
  });

  return (
    <>
      {navItem === "Upload" ? (
        <main className="p-3 flex flex-col items-center justify-center overflow-hidden">
          <Upload
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            setData={setData}
            data={data}
          />
          <UploadedFiles data={data} />
        </main>
      ) : (
        <div className="flex items-center justify-center text-xl font-bold">
          To Do
        </div>
      )}
    </>
  );
}
