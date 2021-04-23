import React from "react";
import aboutus from "./aboutus.jsx";

it("renders the home component correctly", () => {
    const { container } = render(<aboutus />);
    expect(container).toMatchSnapshot();
});
