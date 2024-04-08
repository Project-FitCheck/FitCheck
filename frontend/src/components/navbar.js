import { Stack } from '@mui/material';
import { Navb } from './navb';

const NavBar = (props) => {

    let home, model, catalog, profile = false;
    if (props.page === "home") {
        home = true;
    } else if (props.page === "model") {
        model = true;
    } else if (props.page === "catalog") {
        catalog = true;
    } else if (props.page === "profile") {
        profile = true;
    }

    return (
        <div className="navigation">
            <div className='logo'>
                <img src='/fitcheck_logo_192_v2.png' alt="fitcheck logo"></img>
                <h1>FitCheck</h1>
            </div>

            <Stack spacing={2} direction="column">
                <Navb page={home} link="/closet" img="/icons/icons8-home-logo.svg" name="HOME"/>
                <Navb page={model} link="/model" img="/icons/icons8-user-50.png" name="MODEL"/>
                <Navb page={catalog} link="/catalog" img="/icons/icons8-search.svg" name="CATALOG"/>
                <Navb page={profile} link="/profile" img="/icons/icons8-cog.svg" name="PROFILE"/>

                {/* <Button component={Link} to={"/closet"}
                    className="home" {...location.pathname === ('/closet') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-home-logo.svg" alt="home icon"></img> Home </Button>

                <Button component={Link} to={"/model"}
                    className="model" {...location.pathname === isActive('/model') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-user-50.png" alt="model icon"></img> Model </Button>

                <Button component={Link} to={"/catalog"}
                    className="catalog" {...location.pathname === isActive('/catalog') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-search.svg" alt="search icon"></img> Catalog</Button>

                <Button component={Link} to={"/profile"}
                    className="profile" {...location.pathname === isActive('/profile') ? 'active' : 'inactive'}
                    variant="contained"><img src="/icons/icons8-cog.svg" alt="setting icon"></img> Profile</Button> */}
            </Stack>
        </div>
    );
}
export default NavBar;