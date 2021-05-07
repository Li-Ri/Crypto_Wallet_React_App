import DashBoard from "../containers/DashBoard";
import { fireEvent, render } from "@testing-library/react";

describe("DashBoard", () => {
  let container;
  beforeEach(() => {
    container = render(<DashBoard />);
  });

  it("Should have a title of DashBoard", () => {
    const title = container.getByTestId("dashboard-title");
    expect(title).toHaveTextContent("DashBoard");
  });
});
