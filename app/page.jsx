"use client";

import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("sus");

  const handler = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div className="level-selector">
      <div className="level-selector__container">
        <label>Enter your alias</label>
        <br />
        <input type="text" name="alias" onChange={handler} />
        <br />
        <br />
        <label>Select a mode</label>
        <br />
        <div className="btn-container">
          <Link href={`/normal?id=${name}`} passHref>
            <button type="button">Normal</button>
          </Link>
          <Link href={`/advanced?id=${name}`} passHref>
            <button type="button">Advanced</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
