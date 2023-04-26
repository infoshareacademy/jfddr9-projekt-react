import { render, screen, fireEvent } from '@testing-library/react';

import { SearchField } from ".";


describe("SearchField", () =>{
    it('should render', () => {
        

        //given
        const setQueryMock = jest.fn();
        render (<SearchField setQuery={setQueryMock}/>)
        const element = screen.getByPlaceholderText('Search for Startups...');

        //when
        fireEvent.change(element, {target: {value: 'xd'}})

        expect(setQueryMock).toHaveBeenCalled()
    })

})