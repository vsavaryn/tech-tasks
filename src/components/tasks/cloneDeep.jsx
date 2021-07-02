import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea"

const cloneDeep = obj => {
  let copy = {};

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  if (obj instanceof Object) {
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = cloneDeep(obj[attr])
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};

const code = `const cloneDeep = obj => {
  let copy = {};

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  if (obj instanceof Object) {
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = cloneDeep(obj[attr])
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};`;

export default function CloneDeep() {
  const [value, setValue] = useState("");
  
  try {
    const obj = JSON.parse(value)
    console.log(obj)
    console.log(cloneDeep(obj));
  }
  catch { }

  return (
    <>
      <div className="p-field">
        <label htmlFor="value" className="p-d-block">
          Enter object to clone
        </label>
        <span className="p-input">        
          <InputTextarea
            id="value"
            rows={5}
            cols={75}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
      </div>
      <h2>Code</h2>
      <InputTextarea rows={20} cols={75} value={code} />
    </>
  );
}
