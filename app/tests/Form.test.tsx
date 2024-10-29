import { render, screen, fireEvent } from '@testing-library/react';
import Form from '@/app/components/Form';

describe('Form Component', () => {
  test('renders input and button', () => {
    render(<Form onSearch={jest.fn()} />);
    expect(screen.getByPlaceholderText('Enter city or country')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  test('calls onSearch with the input value', () => {
    const mockOnSearch = jest.fn();
    render(<Form onSearch={mockOnSearch} />);

    fireEvent.change(screen.getByPlaceholderText('Enter city or country'), {
      target: { value: 'Tokyo' },
    });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(mockOnSearch).toHaveBeenCalledWith('Tokyo');
  });
});
