import Body from "../components/Body";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for KFC text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // When Body component is loaded listing all restaurant cards
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const buttonSearch = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  // Fill search input with value = KFC
  fireEvent.change(searchInput, { target: { value: "KFC" } });

  // Click Search button to perform Search
  fireEvent.click(buttonSearch);

  // Restaurant cards after filtering with search value
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should Filter Top Listed Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // When Body component is loaded listing all restaurant cards
  const cardsBeforeFilteringTopListedRestaurants =
    screen.getAllByTestId("resCard");
  expect(cardsBeforeFilteringTopListedRestaurants.length).toBe(9);

  const topListedRestaurantsBtn = screen.getByRole("button", {
    name: "Top Listed Restaurants",
  });

  // Click Top Listed Restaurants button
  fireEvent.click(topListedRestaurantsBtn);

  // Top Listed Restaurants Cards
  const cardsAfterFilteringTopListedRestaurants =
    screen.getAllByTestId("resCard");

  expect(cardsAfterFilteringTopListedRestaurants.length).toBe(3);
});

it("Should Change LoggedIn UserName It has reflect in the Header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  act(() => {
    const offlineEvent = new Event('offline')
    window.dispatchEvent(offlineEvent)
  })

  const offlineStatusText = screen.getByText('Looks like you are offline!! Please check your internet connection.')
  expect(offlineStatusText).toBeInTheDocument()

});
