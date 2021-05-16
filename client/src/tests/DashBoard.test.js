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

  it("Should have a portfolio with an initial length of zero", () => {
    const cryptoDetail = container.getByTestId("portfolio");
    expect(cryptoDetail.innerHTML).toEqual("");
  });

  it("Should have dollar amount in wallet", () => {
    const walletTotal = container.getByTestId("wallet-total");
    expect(walletTotal).toHaveTextContent("$");
  });
});
