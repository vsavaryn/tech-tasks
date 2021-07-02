import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const findArrayDuplicates = array => {
  return [...new Set(
    array.filter(item =>
      array.filter(i => i === item).length > 1
    )
  )];
}

const code = `const findArrayDuplicates = array => {
  return [...new Set(
    array.filter(item =>
      array.filter(i => i === item).length > 1
    )
  )];
}`;

export default function FindArrayDuplicates() {
  const [value, setValue] = useState("");
  const array = value.split(',').map(item => item.trim());
  const duplicates = findArrayDuplicates(array).join(', ');

  return (
    <>
      <div className="p-field">
        <label htmlFor="value" className="p-d-block">
          Enter array of values, separated by comma
        </label>
        <span className="p-input">
          <InputText
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
      </div>
      <div className="p-field">
        <label htmlFor="value" className="p-d-block">
          Duplicates
        </label>
        <span className="p-input">
          <InputText
            id="duplicates"
            value={duplicates}
            readOnly={true}
          />
        </span>
      </div>
      <h2>Code</h2>
      <InputTextarea rows={7} cols={75} value={code} />
    </>
  );
}
