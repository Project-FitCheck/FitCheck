import React from 'react';
import '../CSS/Add.css';

function Add() {
	return <div className='Add'>
		<h1>Upload Your Clothes Here!</h1>
		<form action="">
			<label htmlFor="upload"><input type="file" name="upload" id="upload" /></label>
			
			<label htmlFor="type">Choose type: <select name="type" id="type">
					<option value="shirt">Shirt</option>
					<option value="pant">Pant</option>
					<option value="shoe">Shoe</option>
				</select>
			</label>
			<label htmlFor="color">Color: <select name="color" id="color">
					<option value="black">Black</option>
					<option value="blue">Blue</option>
					<option value="brown">Brown</option>
					<option value="green">Green</option>
					<option value="grey">Grey</option>
					<option value="multi-color">Multi-color</option>
					<option value="orange">Orange</option>
					<option value="pink">Pink</option>
					<option value="purple">Purple</option>
					<option value="red">Red</option>
					<option value="white">White</option>
					<option value="yellow">yellow</option>
				</select>
			</label>
			<label htmlFor="size">Size: <select name="size" id="size">
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
					<option value="x-large">X-Large</option>
					<option value="xx-large">XX-Large</option>
				</select>
			</label>
			
			<button type="submit">SUBMIT</button>
		</form>
	</div>
}

export default Add;