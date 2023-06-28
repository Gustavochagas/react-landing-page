import { screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';

test('renders', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Home',
  }).parentElement;

  expect(headingContainer).toHaveStyleRule('background', 'red');
});
