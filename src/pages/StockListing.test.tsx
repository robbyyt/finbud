import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StockListing from "./StockListing";

jest.mock("../services/finance");

test("renders a search box", async () => {
  render(<StockListing />);
  await waitFor(async () => {
    const searchElement = await screen.findByLabelText("Search");
    expect(searchElement).toBeInTheDocument();
  });
});

test("handles user input on search correctly", async () => {
  render(<StockListing />);

  const searchElement = await waitFor(async () => {
    return (await screen.findByLabelText("Search")) as HTMLInputElement;
  });

  fireEvent.change(searchElement, { target: { value: "AAPL" } });

  expect(searchElement.value).toEqual("AAPL");
});

test("renders a list of stocks according to the user query", async () => {
  render(<StockListing />, { wrapper: BrowserRouter });

  const searchElement = await waitFor(async () => {
    return (await screen.findByLabelText("Search")) as HTMLInputElement;
  });

  fireEvent.change(searchElement, { target: { value: "AAPL" } });
  expect(await screen.findAllByText(/AAPL/i)).toHaveLength(2);
});
