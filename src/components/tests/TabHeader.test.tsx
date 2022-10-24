import { render, screen } from '@testing-library/react';
import TabHeader from '../TabHeader';

test('renders tab header', () => {
  render(<TabHeader title='Kigali' active_tab='Kigali' changeTab={()=> 'hello'} />);
  const heading = screen.getByText(/Kigali/i);
  expect(heading).toBeInTheDocument();
});
