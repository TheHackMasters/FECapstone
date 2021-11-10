import React from "react";
import ReactDOM from "react-dom";
import { test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Reviews from "../reviews/Reviews.jsx";

const ReviewsTest = () => {
  const bodyStr = "Example long review of product";
  const summaryStr = "Example small review of product";

  const reviews = {
    reviews: [
      {
        body: bodyStr,
        date: "2021-11-09T00:00:00.000Z",
        helpfulness: 4,
        photos: [],
        rating: 2,
        recommend: true,
        response: null,
        review_id: 1094575,
        reviewer_name: "person",
        summary: summaryStr,
      },
    ],
  };
  it("should display a Review Card", () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getByText(bodyStr)).toBeInTheDocument();
    expect(screen.getByText(summaryStr)).toBeInTheDocument();
  });
};

export default ReviewsTest;
