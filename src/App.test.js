import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('redirect-link');
  expect(linkElement).toBeInTheDocument();
});

test("check if redirect link is correct",()=>{
  render(<App />);
  
  const linkElement=screen.getByTestId('redirect-link');
  expect(linkElement.href).toContain('https://reactjs.org');
  
})
