import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { screen } from "@testing-library/react";

it("should load ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}></Provider>
    </BrowserRouter>
  );

  // const addbtns = screen.
});
