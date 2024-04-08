import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    return (
        <div className="navigation">
            <div className='logo'>
                <img src='/fitcheck_logo_192_v2.png' alt="fitcheck logo"></img>
                <h1>FitCheck</h1>
            </div>

            <Stack spacing={2} direction="column">
                <Button component={Link} to={"/closet"}
                    className="home" {...location.pathname === (isActive('/closet') || isActive("/locker")) ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-home-logo.svg" alt="home icon"></img> Home </Button>

                <Button component={Link} to={"/model"}
                    className="model" {...location.pathname === isActive('/model') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-user-50.png" alt="model icon"></img> Model </Button>

                <Button component={Link} to={"/catalog"}
                    className="catalog" {...location.pathname === isActive('/catalog') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-search.svg" alt="search icon"></img> Catalog</Button>

                <Button component={Link} to={"/profile"}
                    className="profile" {...location.pathname === isActive('/profile') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-cog.svg" alt="setting icon"></img> Profile</Button>
            </Stack>
        </div>
    );
}
export default NavBar;