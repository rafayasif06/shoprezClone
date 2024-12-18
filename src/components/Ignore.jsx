import React, { useState } from "react";

const First = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggelToTrue = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div
        class={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr]" : ""
        }`}
      >
        <div class="overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          nesciunt. Accusantium natus aliquid nulla incidunt! Id, temporibus ea
          asperiores recusandae veniam optio error accusantium vitae sint porro
          voluptatibus non alias!
        </div>
      </div>

      <button onClick={toggelToTrue}>Toggle Content</button>
    </>
  );
};

export default First;
