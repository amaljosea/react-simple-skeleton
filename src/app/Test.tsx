"use client";
// App.js
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Image from "next/image";

export const Test = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const structure1 = [
    { type: "image", width: "100px", height: "100px" },
    { type: "text", width: "80%", height: "20px" },
    { type: "text", width: "60%", height: "20px" },
  ];

  const structure2 = [
    { type: "text", width: "90%", height: "20px" },
    { type: "text", width: "70%", height: "20px" },
    { type: "text", width: "50%", height: "20px" },
  ];

  return (
    <div>
      <h1>Example 1</h1>
      <Loader isLoading={loading} structure={structure1}>
        <div>
          <Image
            width={100}
            height={100}
            src="/avatar.jpg"
            alt="Loaded content"
          />
          <p>Loaded text content 1</p>
          <p>Loaded text content 2</p>
        </div>
      </Loader>

      <h1>Example 2</h1>
      <Loader isLoading={loading} structure={structure2}>
        <div>
          <p>Loaded text content 1</p>
          <p>Loaded text content 2</p>
          <p>Loaded text content 3</p>
        </div>
      </Loader>
    </div>
  );
};

export default Test;
