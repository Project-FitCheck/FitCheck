import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "@mui/material";

import OutfitCard from "../components/OutfitCard";


const SearchLocker = () => {
    const [colorFilters, setColorFilters] = useState([]);
    const [typeFilters, setTypeFilters] = useState([]);
    const [styleFilters, setStyleFilters] = useState([]);
    const [outfits, setOutfits] = useState([]);
    const [filteredOutfits, setFilteredOutfits] = useState([]);


    useEffect(() => {
        async function getOutfits() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/locker/?userId=" + userId);
                setOutfits(response);
            } catch (error) {
                console.error("Error fetching clothes from locker:", error);
            }
        }
        getOutfits();
    }, []);

    const applyFilters = () => {
        var temp = [];
        var temp2 = [];
        var i, j;
        //check filter color first
        for (i = 0; i < outfits.length; i++) {
            for (j = 0; j < colorFilters.length; j++) {
                if (outfits[i].color === colorFilters[j]) {
                    temp.push(outfits[i]);
                }
            }
        }

        //check filter type next
        for (i = 0; i < temp.length; i++) {
            for (j = 0; j < typeFilters.length; j++) {
                if (temp[i].type === typeFilters[j]) {
                    temp2.push(temp[i]);
                }
            }
        }
        temp = [];
        //check filter style last
        for (i = 0; i < temp2.length; i++) {
            for (j = 0; j < styleFilters.length; j++) {
                if (temp2[i].type === styleFilters[j]) {
                    temp.push(temp2[i]);
                }
            }
        }

        setFilteredOutfits(temp);
    }

    return (
        <div className="SearchCloset">
            <div className="SearchFilters">
                <h2>Keywords</h2>
                <div class="InputContainer">
                    <input placeholder="Search.." id="input" class="input" name="text" type="text" />
                </div>
                <h6>Color</h6>
                <DropdownButton id="dropdown-basic-button" title={colorFilters}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <h6>Type</h6>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <h6>Style</h6>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Button onClick={applyFilters}>Search</Button>
            </div>
            <div className='Outfits'>
                <h1>Welcome to your Locker!</h1>
                <div className="CardArea">
                    {filteredOutfits.map(filteredOutfits => {
                        return (<OutfitCard
                            key={filteredOutfits._id}
                            id={filteredOutfits._id}
                            fitName={filteredOutfits.fitName}
                            pic={filteredOutfits.image}
                            description={filteredOutfits.description}
                        />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchLocker