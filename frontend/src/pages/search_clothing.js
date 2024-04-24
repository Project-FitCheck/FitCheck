import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar.js';
import ClothesCard from '../components/ClothesCard.jsx';
import Select from 'react-select';
import "../styles/searchCloset.css";
import '../styles/CardArea.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SearchCloset() {

    const color = [
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
        { value: 'jacket', label: 'Jacket' },*/
        { value: 'shorts', label: 'Shorts' },
        /*{ value: 'jeans', label: 'Jeans' },
        { value: 'sweatpants', label: 'Sweatpants' },*/
        { value: 'pants', label: 'Pants' },
        /*{ value: 'dress', label: 'Dress' },*/
        { value: 'shoes', label: 'Shoes' }
    ]
    const style = [
        { value: 'all', label: 'All' },
        { value: 'casual', label: 'Casual' },
        { value: 'streetwear', label: 'Streetwear' },
        /*{ value: 'formal', label: 'Formal' },
        { value: 'business', label: 'Business' },
        { value: 'gym', label: 'Gym' },
        { value: 'fun', label: 'Fun' },
        { value: 'lazy', label: 'Lazy' }*/
    ]

    const [colorFilters, setColorFilters] = useState("all");
    const [typeFilters, setTypeFilters] = useState("all");
    const [styleFilters, setStyleFilters] = useState("all");
    const [filteredClothes, setFilteredClothes] = useState([]);

    const [closet, setCloset] = useState([]);

    useEffect(() => {
        async function getCloset() {
            try {
                const userId = window.localStorage.getItem("userId");
                //const response = await axios.get("https://fitcheck-backend-7mo5.onrender.com/closet");
                const response = await axios.get("http://localhost:3001/closet/?userId=" + userId);
                setCloset(response.data);
                setFilteredClothes(response.data)
            } catch (error) {
                console.error("Error fetching clothes from closet:", error);
            }
        }
        getCloset();
    }, []);

    const applyFilters = (e) => {
        e.preventDefault();
        var temp = [];
        var temp2 = [];
        var temp3 = [];
        var i;
        //check filter color first
        if (colorFilters === "all") {
            temp = closet;
        } else {
            for (i = 0; i < closet.length; i++) {
                if (closet[i].color === colorFilters) {
                    temp.push(closet[i]);
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
        }
        return setFilteredClothes(temp3);
    }

    return (
        <>
        <NavBar page="home"/>
        <div className="searchCloset">
            <div className="title">
                <Button component={Link} to={"/closet"} className='navBack'>&#60;</Button>
                <h1>Search Closet</h1>
            </div>

            <div className="greeting">
                <h2>What are you looking for?</h2>
            </div>

            <div className="list-container">

                <div className="search">
                    <input type="text" placeholder="Enter keyword"></input>
                </div>

                <div className="listColor">
                    <h3>Color</h3>
                    <Select options={color} onChange={(selectedOption) => setColorFilters(selectedOption.value)} />
                    {/*<Select options={color} />*/}
                </div>

                <div className="listType">
                    <h3>Type</h3>
                    <Select options={type} onChange={(selectedOption) => setTypeFilters(selectedOption.value)} />
                    {/*<Select options={type} />*/}
                </div>

                <div className="listStyle">
                    <h3>Style</h3>
                    <Select options={style} onChange={(selectedOption) => setStyleFilters(selectedOption.value)} />
                    {/*<Select options={style} />*/}
                </div>

                <div className="filterBtn">
                    <button className="filter" onClick={applyFilters}>Filter</button>
                    {/*<button className="filter">Filter</button>*/}
                </div>
            </div>

            <div className="CardArea">
                {filteredClothes.map(filteredClothes => {
                    return (<ClothesCard
                        key={filteredClothes._id}
                        id={filteredClothes._id}
                        itemName={filteredClothes.productTitle}
                        pic={filteredClothes.image}
                        description={filteredClothes.description}
                        color={filteredClothes.color}
                        type={filteredClothes.type}
                        style={filteredClothes.style}
                    />)
                }
                )}
            </div>
        </div>
        </>
    );
}

export default SearchCloset;