import React, { useState, useRef } from "react";

const DemoUseReference = () => {
  let X = 0;
  const [Y, setY] = useState(0);
  const Z = useRef(0);

  return (
    <div className="text-center p-8 flex flex-col gap-6">
      <div className="text-2xl font-bold">
        Use Reference (useRef) Hook Example
      </div>
      {/* Let Variable */}
      <div className="flex gap-3 items-center justify-center">
        <label className="font-bold">X - Let Variable</label>
        <button
          className="bg-green-200 px-2 py-1 rounded-md"
          onClick={() => {
            X = X + 1;
            console.log("X - ", X);
          }}
        >
          Increase X
        </button>
        <label>let = {X}</label>
      </div>

      {/* State Variable */}
      <div className="flex gap-3 items-center justify-center">
        <label className="font-bold">Y - State Variable</label>

        <button
          className="bg-green-200 px-2 py-1 rounded-md"
          onClick={() => setY(Y + 1)}
        >
          Increase Y
        </button>
        <label>state = {Y}</label>
      </div>

      {/* Reference Variable */}
      <div className="flex gap-3 items-center justify-center">
        <label className="font-bold">Z - Ref Variable</label>
        <button
          className="bg-green-200 px-2 py-1 rounded-md"
          onClick={() => {
            Z.current = Z.current + 1;
            console.log("Z - ", Z.current);
          }}
        >
          Increase Z
        </button>
        <label>Ref = {Z.current}</label>
      </div>
    </div>
  );
};

export default DemoUseReference;
