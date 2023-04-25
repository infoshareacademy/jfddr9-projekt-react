import {render, screen} from "@testing-library/react";
import {AppWrapper} from "./index";


// test("nazwa", () => {
//
// })

describe("AppWrapper", () => {
    it("should render", () => {
        // given
        render(<AppWrapper>test</AppWrapper>)

        // then
        expect(screen.getByText("test")).toBeInTheDocument()
    })
})