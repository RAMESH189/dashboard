import Upload from "./Upload";
import UploadedFiles from "./UploadedFiles";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Content() {
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
  });
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Upload
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        isDragActive={isDragActive}
        setData={setData}
        data={data}
      />
      <UploadedFiles data={data} />
    </div>
  );
}
