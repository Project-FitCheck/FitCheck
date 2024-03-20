import { render, screen, fireEvent } from '@testing-library/react';
import EditModel from '../pages/edit_model';

test('renders profile page when profile nav button is pressed', () => {
    
      render(<EditModel />);
  
      // Find and click the profile nav button
      const link = screen.getByText('Profile');
      fireEvent.click(link);

  //const linkElement = 
  screen.getByText(/ACCOUNT INFORMATION/i);
  //expect(linkElement).toBeInTheDocument();
});