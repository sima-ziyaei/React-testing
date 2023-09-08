import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('can receive a new user and show it on a list', () => {
  render(<App/>);

  const nameInput = screen.getByRole("textbox", {name : /name/i});
  const eamilInput = screen.getByRole('textbox', {name: /email/i});

  user.click(nameInput);
  user.keyboard('sima');
  user.click(eamilInput);
  user.keyboard('sima@sima.com');

  const button = screen.getByRole('button');

  user.click(button);

  // screen.debug();

  const name = screen.getByRole('cell', {name: 'sima'});
  const email = screen.getByRole('cell', {name: 'sima@sima.com'});

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
