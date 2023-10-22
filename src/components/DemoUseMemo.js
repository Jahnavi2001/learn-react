import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helpers";

const DemoUseMemo = () => {
  const [text, setText] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Heavy Operation

  // Without Memoize
  // const prime = findNthPrime(text)

  // With Memoize
  const prime = useMemo(() => findNthPrime(text), [text])

  return (
    <div className={"p-8 flex flex-col gap-6 items-center " + (darkMode && "bg-black h-6/6 text-white")}>
      <div className="text-2xl font-bold"> Use Memo Hook Example</div>
      <div>
        <label>Button to switch between dark and light themes: </label>
        <button
          className="bg-green-300 rounded-md px-2 py-1 text-black"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          Toggle to switch Theme
        </button>
      </div>
      <div>
        <label>Enter Number(n) to find nth Prime: </label>
        <input
          className="border border-black rounded-md px-2 py-1 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        {text}th Prime - {prime}
      </div>

      <div>Note: Try to find 432112 th prime, you will find the difference</div>
    </div>
  );
};

export default DemoUseMemo;
