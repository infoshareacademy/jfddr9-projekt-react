import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import {ErrorAlert} from '.';

describe("Error Alert", () => {
    it('should render', () => {
        //given
        render(<ErrorAlert/>)

        expect(screen.getByText('Error')).toBeInTheDocument()
    })
})