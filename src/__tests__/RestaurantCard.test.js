import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Nandhana Palace");
  expect(name).toBeInTheDocument();
});

test("Should render RestaurantCard component with Promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  render(<RestaurantCardPromoted resData={ MOCK_DATA} />);
  const promotedName   = screen.getByText("Promoted");
  expect(promotedName).toBeInTheDocument();
});
