import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
test("toprated", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Body />;
      </Provider>
    </BrowserRouter>
  );

  const topRatedButton = screen.getByRole("button", { name: "Top Rated Btn" });
  fireEvent.click(topRatedButton);

  const CradafterFilter = screen.getAllByTestId("toprated");
  expect(CradafterFilter.length).toBe(4);
});
