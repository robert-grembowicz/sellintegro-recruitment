import { render, screen, } from '@testing-library/react';
import App from './App';

describe('App testing', () => {

  const texts = [
    'learn react',
    'edit',
    'src/App.js',
    'and save to reload.'
  ]

  it('should renders all texts', () => {
    render(<App />);
    texts.forEach(item => {
      const text = screen.getByText(new RegExp(item, 'i'));
      expect(text).toBeVisible();
    })
  });

  it('should have clickable link', () => {
    render(<App />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://reactjs.org')
  });

  it('link should targetting to new window', () => {
    render(<App />)
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank')
  })
})
