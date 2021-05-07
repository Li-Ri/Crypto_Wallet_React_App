import App from "../App";
import { fireEvent, render } from "@testing-library/react";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = render(<App />);
  });
  it("Should have a navbar with 2 links", () => {
    const nav = container.getAllByTestId("nav-link");
    expect(nav).toHaveLength(2);
  });
});
