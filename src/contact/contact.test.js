import React from "react";
import contact from "./contact";


it("renders the home component correctly", () => {
    const { container } = render(<contact />);
    expect(container).toMatchSnapshot();
});
