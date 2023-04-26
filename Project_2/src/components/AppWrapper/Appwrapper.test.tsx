import { render, screen} from '@testing-library/react';

import { AppWrapper } from '.';

describe("AppWrapper", () => {
    it('should render', () => {

        //given
        render(<AppWrapper><div></div>test</AppWrapper>)

        //then
        expect(screen.getByText("test")).toBeInTheDocument()
    })
})