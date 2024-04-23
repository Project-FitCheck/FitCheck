import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ClothesCard from "../components/ClothesCard";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "@mui/material";

import "../styles/searchCloset.css"

const SearchCloset = () => {
    const colorFilters = useRef([]);
    const typeFilters = useRef([]);
    const styleFilters = useRef([]);
    const [clothing, updateClothing] = useState([]);
    const [filteredClothing, setFilteredClothing] = useState([]);

    useEffect(() => {
        async function getClothes() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/closet/?userId=" + userId);
                updateClothing(response);
            } catch (error) {
                console.error("Error fetching clothes from closet:", error);
            }
        }
        getClothes();
    }, []);

    const applyFilters = () => {
        var temp = [];
        var temp2 = [];
        var i, j;
        //check filter color first
        for (i = 0; i < clothing.length; i++) {
            for (j = 0; j < colorFilters.current.length; j++) {
                if (clothing[i].color === colorFilters.current[j]) {
                    temp.push(clothing[i]);
                }
            }
        }

        //check filter type next
        for (i = 0; i < temp.length; i++) {
            for (j = 0; j < typeFilters.current.length; j++) {
                if(temp[i].type === typeFilters.current[j]) {
                    temp2.push(temp[i]);
                }
            }
        }
        temp = [];
        //check filter style last
        for (i = 0; i < temp2.length; i++) {
            for (j = 0; j < styleFilters.current.length; j++) {
                if(temp2[i].type === styleFilters.current[j]) {
                    temp.push(temp2[i]);
                }
            }
        }
        setFilteredClothing(temp);
    }

    return (
        <div className="SearchCloset">
            <div className="SearchFilters">
                <h6>Keywords</h6>
                <div className="InputContainer">
                    <input placeholder="Search.." id="input" className="input" name="text" type="text" />

                </div>
                <h6>Color</h6>
                <DropdownButton id="dropdown-basic-button" title={colorFilters.current}>
                    <Dropdown.Item as="button" href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item  as="button" href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item  as="button" href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <h6>Type</h6>
                <DropdownButton id="dropdown-basic-button" title={typeFilters.current}>
                    <Dropdown.Item as="button" href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item as="button" href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item as="button" href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <h6>Style</h6>
                <DropdownButton id="dropdown-basic-button" title={styleFilters.current}>
                    <Dropdown.Item as="button" href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item as="button" href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item as="button" href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <Button onClick={applyFilters}>Search</Button>
            </div>
            <div className="CardArea">
                {filteredClothing.map(filteredClothing => {
                    return (<ClothesCard
                        key={filteredClothing._id}
                        id={filteredClothing._id}
                        itemName={filteredClothing.productTitle}
                        pic={filteredClothing.image}
                        description={filteredClothing.description}
                        color={filteredClothing.color}
                        type={filteredClothing.type}
                        style={filteredClothing.style}
                    />)
                })}
            </div>
        </div>
    )
}

export default SearchCloset