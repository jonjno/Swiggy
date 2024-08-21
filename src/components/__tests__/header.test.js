import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("shoul load header componennt with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("login");
  const loginButton = screen.getByRole("button", { name: "login" });
  expect(loginButton).toBeInTheDocument();
});

it("shoul load header componennt with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("login");
  const cart = screen.getByText("cart");
  expect(cart).toBeInTheDocument();
});

it("shoul load header componennt login to logout button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const btn = screen.getByText("login");
  fireEvent.click(btn);

  const logout = screen.getByRole("button", { name: "logout" });
  expect(logout).toBeInTheDocument();
});
