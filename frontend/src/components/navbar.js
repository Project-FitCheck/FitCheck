<<<<<<< HEAD
<<<<<<< HEAD
import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
=======
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
>>>>>>> 0d7b7dd (Pages (#26))
=======
import { Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
>>>>>>> 39bcb2d (Added components and homepage (#30))

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    return (
        <div className="navigation">
            <Stack spacing={2} direction="column">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 39bcb2d (Added components and homepage (#30))
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
<<<<<<< HEAD
            </Stack>
        </div>
=======
                <Link to="/closet">Home</Link>
                <Link to="/model">Model</Link>
                <Link to="/search">Search</Link>
                <Link to="/profile">Profile</Link>
                {/* <Button variant="contained">Home</Button>
                <Button variant="contained">Model</Button>
                <Button variant="contained">Search</Button>
                <Button variant="contained">Profile</Button> */}
            </Stack>
        </div>

        /*<Link to="home/closet">Home</Link>*/
>>>>>>> 0d7b7dd (Pages (#26))
=======
            </Stack>
        </div>
>>>>>>> 39bcb2d (Added components and homepage (#30))
    );
}
export default NavBar;