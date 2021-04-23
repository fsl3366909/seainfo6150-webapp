import React from "react";
import Order from "./Order.jsx";

it("renders the home component correctly", () => {
    const { container } = render(<Order />);
    expect(container).toMatchSnapshot();
});
