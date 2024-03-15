import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const NavBar = () => {
    return (
        <Stack spacing={2} direction="column">
            <Button variant="contained">Home</Button>
            <Button variant="contained">Model</Button>
            <Button variant="contained">Search</Button>
            <Button variant="contained">Profile</Button>
        </Stack>
    );
}
export default NavBar