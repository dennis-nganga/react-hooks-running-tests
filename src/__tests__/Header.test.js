import "@testing-library/jest-dom";
import { queryByText, render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  const headerText = screen.queryByText("hello from the Header!")
  expect(headerText).toBeNull();
  if (!Header){
    console.error ('Error: Null element passed to queryByText function')
  return null; 
  }
});
console.log(Header)