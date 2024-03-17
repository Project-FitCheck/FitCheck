import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    return (
        <div className="navigation">
            <Stack spacing={2} direction="column">
                <Button component={Link} to={"/closet"}
                    className={location.pathname === isActive('/closet') ? 'active' : 'inactive'}
                    variant="contained"> Home </Button>

                <Button component={Link} to={"/model"}
                    className={location.pathname === isActive('/model') ? 'active' : 'inactive'}
                    variant="contained"> Model </Button>

                <Button component={Link} to={"/search"}
                    className={location.pathname === isActive('/search') ? 'active' : 'inactive'}
                    variant="contained">Search</Button>

                <Button component={Link} to={"/profile"}
                    className={location.pathname === isActive('/profile') ? 'active' : 'inactive'}
                    variant="contained">Profile</Button>
            </Stack>
        </div>
    );
}
export default NavBar