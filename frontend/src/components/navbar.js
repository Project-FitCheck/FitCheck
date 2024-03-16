import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navigation">
            <Stack spacing={2} direction="column">
                <Button variant="contained">Home</Button>
                <Button variant="contained">Model</Button>
                <Button variant="contained">Search</Button>
                <Button variant="contained">Profile</Button>
            </Stack>
        </div>
        
        /*<Link to="home/closet">Home</Link>*/
    );
}
export default NavBar