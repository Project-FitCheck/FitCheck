import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar.js';
//import Select from 'react-select';
import "../styles/searchLocker.css";
import '../styles/CardArea.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import OutfitCard from '../components/OutfitCard.jsx';

function SearchLocker() {

    /* const color = [
        { value: 'all', label: 'All' },
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'gray', label: 'Gray' },
        { value: 'green', label: 'Green' },
        { value: 'tan', label: 'Tan' },
        { value: 'cottoncandy', label: 'Cotton Candy' }
    ]
    const type = [
        { value: 'all', label: 'All' },
        { value: 'shirt', label: 'Shirt' },
        /*{ value: 'long-sleeve', label: 'Long-sleeve' },
        { value: 'sweater', label: 'Sweater' },
        { value: 'jacket', label: 'Jacket' },
        { value: 'shorts', label: 'Shorts' },
        /*{ value: 'jeans', label: 'Jeans' },
        { value: 'sweatpants', label: 'Sweatpants' },
        { value: 'pants', label: 'Pants' },
        /*{ value: 'dress', label: 'Dress' },
        { value: 'shoes', label: 'Shoes' }
    ]
    const style = [
        { value: 'all', label: 'All' },
        { value: 'casual', label: 'Casual' },
        { value: 'streetwear', label: 'Streetwear' },
        { value: 'formal', label: 'Formal' },
        { value: 'business', label: 'Business' },
        { value: 'gym', label: 'Gym' },
        { value: 'fun', label: 'Fun' },
        { value: 'lazy', label: 'Lazy' }
    ] */

    /* const [colorFilters, setColorFilters] = useState("all");
    const [typeFilters, setTypeFilters] = useState("all");
    const [styleFilters, setStyleFilters] = useState("all"); */

    const [outfitFilters, setOutfitFilters] = useState("");
    const [filteredOutfits, setFilteredOutfits] = useState([]);

    const [locker, setLocker] = useState([]);

    useEffect(() => {
        async function getLocker() {
            try {
                const userId = window.localStorage.getItem("userId");
                const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/locker/?userId=" + userId);
                //const response = await axios.get("http://localhost:3001/locker/?userId=" + userId);
                setLocker(response.data);
                setFilteredOutfits(response.data)
            } catch (error) {
                console.error("Error fetching outfits from locker:", error);
            }
        }
        getLocker();
    }, []);


    const toMap = (str) => {
        const frequencies = {};

        // Loop through each character in the string
        for (let i = 0; i < str.length; i++) {
            const char = str[i].toLowerCase(); // Convert to lowercase to handle case insensitivity
            // Check if it's a letter
            if (/^[a-z]$/.test(char)) {
                // If the character is already a key in the object, increment its value
                if (frequencies[char]) {
                    frequencies[char]++;
                } else {
                    // If the character is not a key, add it with a value of 1
                    frequencies[char] = 1;
                }
            }
        }
        return frequencies;
    }

    function areEquivalent(obj1, obj2) {
        // Check if both objects have the same number of keys
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        // Check if all keys in obj1 have the same values in obj2
        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        // Check if all keys in obj2 have the same values in obj1 (to ensure symmetry)
        for (let key of keys2) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        // If all checks pass, the objects are equivalent
        return true;
    }

    const applyFilters = (e) => {
        e.preventDefault();
        var i;
        var temp = [];
        const map = toMap(outfitFilters);
        console.log(map);

        if (outfitFilters === "") {
            temp = locker;
        } else {
            for (i = 0; i < locker.length; i++) {
                console.log(toMap(locker[i].fitName));
                if (areEquivalent(toMap(locker[i].fitName), map)) {
                    temp.push(locker[i]);
                }
            }
        }
        /* var temp = [];
        var temp2 = [];
        var temp3 = [];
        var i;
        //check filter color first
        if (colorFilters === "all") {
            temp = locker;
        } else {
            for (i = 0; i < locker.length; i++) {
                if (locker[i].color === colorFilters) {
                    temp.push(locker[i]);
                }
            }
        }
        //check filter type next
        if (typeFilters === "all") {
            temp2 = temp;
        } else {
            for (i = 0; i < temp.length; i++) {
                if (temp[i].type === typeFilters) {
                    temp2.push(temp[i]);
                }
            }
        }
        //check filter style next
        if (styleFilters === "all") {
            temp3 = temp2;
        } else {
            for (i = 0; i < temp2.length; i++) {
                if (temp2[i].style === styleFilters) {
                    temp3.push(temp2[i]);
                }
            }
        } */
        return setFilteredOutfits(temp);
    }

    return (
        <>
            <NavBar page="home" />
            <div className="searchLocker">
                <div className="title">
                    <Button component={Link} to={"/locker"} className='navBack'>&#60;</Button>
                    <h1>Search Outfits</h1>
                </div>

                <div className="greeting">
                    <h2>What are you looking for?</h2>
                </div>

                <div className="list-container">

                    <div className="search">
                        <input type="text" placeholder="Enter keyword" value={outfitFilters} onChange={(e) => setOutfitFilters(e.target.value)}></input>
                    </div>

                    {/* To be added when outfits have more identifiers
                    {/* <div className="listColor">
                        <h3>Color</h3>
                        <Select options={color} onChange={(selectedOption) => setColorFilters(selectedOption.value)} />
                        {/*<Select options={color} />*
                    </div>

                    <div className="listType">
                        <h3>Type</h3>
                        <Select options={type} onChange={(selectedOption) => setTypeFilters(selectedOption.value)} />
                        {/*<Select options={type} />*
                    </div>

                    <div className="listStyle">
                        <h3>Style</h3>
                        <Select options={style} onChange={(selectedOption) => setStyleFilters(selectedOption.value)} />
                        {/*<Select options={style} />*
                    </div> */}

                    <div className="filterBtn">
                        <button className="filter" onClick={applyFilters}>Apply Filters</button>
                        {/*<button className="filter">Filter</button>*/}
                    </div>
                </div>

                {filteredOutfits.length ? <div className="CardArea">
                    {filteredOutfits.map(filteredOutfits => {
                        return (<OutfitCard
                            key={filteredOutfits._id}
                            id={filteredOutfits._id}
                            fitName={filteredOutfits.fitName}
                            pic={filteredOutfits.image}
                            description={filteredOutfits.description}
                            shirt={filteredOutfits.shirt}
                            pants={filteredOutfits.pants}
                            shoes={filteredOutfits.shoes}
                        />)
                    }
                    )}
                </div> : <h2 className='notFound'>No Outfit Found</h2>}
            </div>
        </>
    );
}

export default SearchLocker;