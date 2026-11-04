import React from "react";
import { Heading } from "../Heading";
import { Footer } from "../Footer";

type presetComponentProp = {
  children: React.ReactNode;
};

export function PresetComponent({ children }: presetComponentProp) {
  return (
    <>
      <Heading></Heading>
      <div className="pl-5 pr-5 md:pl-10 md:pr-10">{children}</div>
      <Footer></Footer>
    </>
  );
}
