import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { countries } from '../utils/testUtils';
import { InitProvider, Provider } from './Context';
import { Countries } from './Countries';
import { render, waitForElement, fireEvent, getByText as getByTextContainer } from '@testing-library/react';
import { Country } from '../../types/Country';
import { sortByProperty } from '../utils/utils';

const fakeData = require('../utils/fakeData.json');
const response: Country[] = JSON.parse(JSON.stringify(fakeData));

const mock = new MockAdapter(axios);



beforeEach(() => {
    mock.reset();
})

const tree = (
    <InitProvider>
        <Provider>
            <Countries />
        </Provider>
    </InitProvider>
)
test('should render withour craching', async () => {
    mock.onGet('/all').reply(() => [200, countries]);
    
    const { container, getByLabelText, getByTestId } = render(tree);
    expect(container.firstChild).toBeInTheDocument();
    expect(getByLabelText('loading')).toBeInTheDocument();
    const inputsWrapper = await waitForElement(() => getByTestId('wrapper-inputs'));
    expect(inputsWrapper).toBeInTheDocument();
});

test('should the result in the table change when I click on the radio buttons', async () => {
    mock.onGet('/all').reply(() => [200, countries]);
    
    const { getAllByTestId } = render(tree);
    const radioButtons = await waitForElement(() =>  getAllByTestId('radio-button')) as HTMLInputElement[];
    const euroRadioButton = radioButtons[1];
    const allRadioButton = radioButtons[0];
    // test when you choose EURO to filter the countries
    fireEvent.click(euroRadioButton);
    expect(getAllByTestId('table-item').length).toBe(countries.filter(country => country.currencies.includes('EUR')).length);
    
    // test when you choose to see all the countries with them currencies
    fireEvent.click(allRadioButton);
    expect(getAllByTestId('table-item').length).toBe(countries.length);
});

test('should the result change when I make a research on the input', async () => {
    mock.onGet('/all').reply(() => [200, countries]);

    const { getAllByTestId, getByPlaceholderText, queryAllByTestId  } = render(tree);
    const input = await waitForElement(() => getByPlaceholderText('Search By Name..'));

    // test when you tape the name of countries that does exist
    fireEvent.change(input, { target: { value: countries[0].name } } );
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(getAllByTestId('table-item').length).toBe(1);

    // test when you tape the name of country that does not exist
    fireEvent.change(input, { target: { value: 'random text' } } );
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(queryAllByTestId('table-item')).toStrictEqual([]);

    // test when you tape an empty string
    fireEvent.change(input, { target: { value: '' } } );
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(getAllByTestId('table-item').length).toBe(3);
});

test('should test pagination', async () => {
    mock.onGet('/all').reply(() => [200, response]);
    const { getAllByTestId, getByText } = render(tree);
    // test the number of page that we get
    const paginationsButtons = await waitForElement(() => getAllByTestId('pagination-item'));
    expect(paginationsButtons.length).toBe(25);

    // click in the button number 3 and find it in the DOM
    const thirdPaginationButton = paginationsButtons[2];
    fireEvent.click(thirdPaginationButton);
    const firstElementInThirdPage = response[20];
    expect(getByText(firstElementInThirdPage.name)).toBeInTheDocument();
});

test('should sort the table items by name', async () =>{
    mock.onGet('/all').reply(() => [200, response]);
    const { getAllByTestId, getByText } = render(tree);

    const headerNameTable = await waitForElement(() => getByText('name'));
    const firstPage = response.slice(0, 10);
    const firstPageSorted = sortByProperty(firstPage, 'name', true);
    fireEvent.click(headerNameTable);
    const lastTableItem = getAllByTestId('table-item')[9];
    expect(getByTextContainer(lastTableItem, firstPageSorted[9].name)).toBeInTheDocument();
})
