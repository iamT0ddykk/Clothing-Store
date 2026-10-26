import React from "react";

type containerProp = {
  children: React.ReactNode;
};

export function Container({ children }: containerProp) {
  return (
    <>
      <div className="pl-5 pr-5 md:pl-10 md:pr-10">{children}</div>
    </>
  );
}
