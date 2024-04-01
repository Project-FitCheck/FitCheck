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
                    variant="contained"><img src="/icons/icons8-home-logo.svg" alt="home icon"></img> Home </Button>

                <Button component={Link} to={"/model"}
                    className={location.pathname === isActive('/model') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-user-50.png" alt="model icon"></img> Model </Button>

                <Button component={Link} to={"/search"}
                    className={location.pathname === isActive('/search') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-search.svg" alt="search icon"></img> Search</Button>

                <Button component={Link} to={"/profile"}
                    className={location.pathname === isActive('/profile') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-cog.svg" alt="setting icon"></img> Profile</Button>
            </Stack>
        </div>
    );
}
export default NavBar;