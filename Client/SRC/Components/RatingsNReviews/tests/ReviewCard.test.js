import React from "react";
import ReactDOM from "react-dom";
import { test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App.jsx";
import ReviewCard from "../reviews/ReviewCard.jsx";


const ReviewCardTest = () => {
  const reviewObj = {
    body: "Example long review of product",
    reviewer_name: "ynot_review",
  };
  it("should display a Review Card", () => {
    render(<ReviewCard review={reviewObj} key={6} />);
    expect(
      screen.getByText("Example long review of product")
    ).toBeInTheDocument();
    expect(screen.getByText("Helpful | ?")).toBeInTheDocument();
  });
};

export default ReviewCardTest;