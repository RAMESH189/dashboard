import React from "react";
import FileContent from "./FileContent";

export default function UploadedFiles({ data }) {
  const tableHeaders = data.length > 0 && data[0].split(",");
  // the rest of the elements are the content of the table
  const tableRows = data.length > 1 && data.slice(1);

  return (
    <div
      className={`w-full flex flex-col justify-center overflow-x-auto items-center item p-2 ${
        data.length === 0 ? "hidden" : ""
      }`}
    >
      <h2 className="mb-3 font-semibold text-xl">Uploads</h2>
      <div className="w-[1065px] h-fit min-h-[497px] bg-gray-200 rounded-lg">
        <div className="p-2 ">
          <div className="flex items-center justify-around mb-2">
            {tableHeaders &&
              tableHeaders.map((header, index) => (
                <p className="flex-[0.2] px-5" key={index}>
                  {header}
                </p>
              ))}
          </div>
          <div className="p-2 w-full">
            {tableRows.length > 0 &&
              tableRows.map((tableRow, index) => (
                <FileContent key={index} rowData={tableRow} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
