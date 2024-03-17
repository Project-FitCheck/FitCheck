import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders profile page when profile nav button is pressed', () => {
    
      render(<App />);
  
      // Find and click the profile nav button
      const link = screen.getByText('Profile');
      fireEvent.click(link);

  //const linkElement = 
  screen.getByText(/ACCOUNT INFORMATION/i);
  //expect(linkElement).toBeInTheDocument();
});
