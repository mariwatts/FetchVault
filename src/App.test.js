// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FetchVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FetchVault/i);
    expect(titleElement).toBeInTheDocument();
});
