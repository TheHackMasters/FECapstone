import React from "react";
import ReactDOM from "react-dom";
import { test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App.jsx";
import RatingsNReviews from "./../RatingsNReviews.jsx";

const RatingsNReviewsTest = () => {
  it("should render the RatingsNReviews", () => {
    render(<App />);
    expect(screen.getByText("Ratings & Reviews", { exact: false }));
  });
  it("should display a Review Card", () => {
    render(<RatingsNReviews />);
    expect(
      screen.getByText("MORE REVIEWS", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText("ADD A REVIEW +")).toBeInTheDocument();
  });
};
export default RatingsNReviewsTest;