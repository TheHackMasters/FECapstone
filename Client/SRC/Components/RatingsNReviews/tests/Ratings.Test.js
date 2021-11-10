import React from "react";
import ReactDOM from "react-dom";
import { test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import App from "../../../App.jsx";
import Ratings from "../ratings/Ratings.jsx";


const RatingsTest = () => {
  const comfortVal = "2.7333";
  const fitVal = "2.2666";
  const lengthVal = "2.0666";
  const qualityVal = "2.2000";

  const metaObj = {
    data: {
      product_id: 61575,
      ratings: { 2: "8", 3: "5", 4: "2", 5: "6" },
      recommended: { false: "5", true: "16" },
      characteristics: {
        Comfort: { id: 206675, value: comfortVal },
        Fit: { id: 206673, value: fitVal },
        Length: { id: 206674, value: lengthVal },
        Quality: { id: 206676, value: qualityVal },
      },
    },
  };
  it("should display Ratings", () => {
    render(<Ratings meta={metaObj} />);
    expect(screen.getByText("Ratings & Reviews")).toBeInTheDocument();
    expect(screen.getByDisplayValue(comfortVal)).toBeInTheDocument();
    expect(screen.getByDisplayValue(fitVal)).toBeInTheDocument();
    expect(screen.getByDisplayValue(lengthVal)).toBeInTheDocument();
    expect(screen.getByDisplayValue(qualityVal)).toBeInTheDocument();
  });
};

export default RatingsTest;
