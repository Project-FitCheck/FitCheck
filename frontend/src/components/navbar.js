import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Navb } from './navb';

const NavBar = (props) => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

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
                <Navb page={home} link="/closet" img="/icons/icons8-home-logo.svg" name="HOME" />
                <Navb page={model} link="/model" img="/icons/icons8-user-50.png" name="MODEL" />
                <Navb page={catalog} link="/catalog" img="/icons/icons8-search.svg" name="CATALOG" />
    			<Navb page={profile} link="/profile" img="/icons/icons8-cog.svg" name="PROFILE" />	
            </Stack>
        </div>
    );
}
export default NavBar;