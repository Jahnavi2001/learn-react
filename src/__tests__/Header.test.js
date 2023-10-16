import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

test("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("Should load Header component with cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText("Cart (0 items)");
  expect(cartText).toBeInTheDocument();

  // Regex Match
  const cartTextRegex = screen.getByText(/Cart/);
  expect(cartTextRegex).toBeInTheDocument();
});

test("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Login button is present
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  // Fire Event (click login button)
  fireEvent.click(loginButton);

  // Logout button should appear
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

test("Set window online status to Offline so that it appears in the header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("OnlineStatus: ✅")).toBeInTheDocument();

  act(() => {
    const offlineEvent = new Event("offline");
    window.dispatchEvent(offlineEvent);
  });

  expect(screen.getByText("OnlineStatus: 🔴")).toBeInTheDocument();
});

test("Should chnange Logout button to Login", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
  );

  // Login button is present
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  // Fire Event (click login button)
  fireEvent.click(loginButton);

  // Logout button us present
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();

  // Fire Event (click logout button)
  fireEvent.click(logoutButton);

  // Login button is present
  expect(loginButton).toBeInTheDocument();
});
