import React from 'react';
import { render } from '@testing-library/react';
import { TableItem } from './TableItem';
import { TableItemProps } from '../../types/Table';

const props: TableItemProps = {
    country: {
        name: "Afghanistan",
        region: "Asia",
        population: 26023100,
        area: 652230,
        currencies: [
          "AFN"
        ],
        languages: [
          "ps",
          "uz",
          "tk"
        ],
      },
      isEven: false,
}
test('should render without crashing', () => {
    const { container } = render(<TableItem {...props} />);
    expect(container.firstChild).toBeInTheDocument();
});

test('should render all the 6 properties', () => {
    const { getByText } = render(<TableItem {...props} />);
    expect(getByText(props.country.name)).toBeInTheDocument();
    expect(getByText(props.country.population.toString())).toBeInTheDocument();
    expect(getByText(props.country.area.toString())).toBeInTheDocument();
    expect(getByText(props.country.region)).toBeInTheDocument();
    expect(getByText(/ps/i)).toBeInTheDocument();
    expect(getByText(/AFN/i)).toBeInTheDocument();
})