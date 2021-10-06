import About from './About';

import {render} from '@testing-library/react'


test('renders a button', () => {
    const { container, getByRole } = render(<About title='title' paragraph='paragraph' />)
    expect(getByRole('button')).toBeInTheDocument();
})