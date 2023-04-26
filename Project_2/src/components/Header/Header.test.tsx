import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import {Header} from '.';

describe("Error Alert", () => {
    it('should render', () => {
        //given
        render(<Header/>)

        expect(screen.getByText('InfoShare')).toBeInTheDocument()
        expect(screen.getByText('User list')).toBeInTheDocument()

    })
})