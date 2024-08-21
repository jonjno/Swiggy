import { render, screen } from "@testing-library/react";
import RestroCrad from "../RestroCard";
import Data from "../mocks/rescardMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render restaurant componet with props", () => {
  render(
    <Provider appStore={appStore}>
      <RestroCrad props={Data} />
    </Provider>
  );
  const name = screen.getByText("dosa");
  expect(name).toBeInTheDocument();
});
