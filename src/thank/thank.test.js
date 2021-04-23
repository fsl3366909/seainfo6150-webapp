import React from "react";
import thank from "./thank";

describe("Bar tests", () => {
    it("renders correctly", () => {
        const { container } = render(<thank categoryId={0} productId="baz" />);
        expect(container).toMatchSnapshot();
    });
});
