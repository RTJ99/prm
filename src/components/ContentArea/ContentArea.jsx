import React from "react";

function ContentArea(props) {
  return (
    <div className="py-3 px-4  h-full lg:ml-[20px] relative overflow-y-scroll md:w-full ">
      {props.children}
    </div>
  );
}

export default ContentArea;
