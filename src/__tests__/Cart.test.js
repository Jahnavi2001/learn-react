import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuMock.json";
import RestaurantMenu from "../components/RestaurantMenu";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from '../components/Cart'
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Cart", async () => {

  // As we are rendering 3 components, our screen will contain 3 components
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  // Check how many accordion categories are present
  expect(screen.getAllByTestId("accordionCategories").length).toBe(18);

  // Clicked on one accordion category
  const oneAccordionCategory = screen.getByText("BIRYANI BUCKETS (10)");
  fireEvent.click(oneAccordionCategory);

  // Check how many items are there in "BIRYANI BUCKETS (10)" category
  expect(screen.getAllByTestId('foodItems').length).toBe(10)

  // ADD First Item into cart
  const itemAddBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(itemAddBtns[0]);

  // Check the header
  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument()

  // ADD Second Item into cart
  fireEvent.click(itemAddBtns[1]);

  // Check the header
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument()

  // Here foodItems will be combination of 10 + 2 (bcz itemlist is used both in resmenu and cart)
  expect(screen.getAllByTestId('foodItems').length).toBe(12)

  // Click ClearCart button
  const clearCart = screen.getByRole('button', { name: 'Clear Cart' })
  fireEvent.click(clearCart)

  // As we cleared cart now only resmenu food Items are present
  expect(screen.getAllByTestId('foodItems').length).toBe(10)

  // As cart is empty this should be present on cart screen
  expect(screen.getByText('Cart is Empty. Add Items to your Cart')).toBeInTheDocument()
});
