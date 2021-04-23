import React from "react";
import confirmation from "./confirmation.jsx";

it("renders the home component correctly", () => {
    const { container } = render(<confirmation />);
    expect(container).toMatchSnapshot();
});
