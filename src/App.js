import React, {useEffect, useState } from "react";
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer';

const App = () => {

  const APP_ID = '3b276331';
  const APP_KEY = 'bae8af78b98ebdc942515c5e2ae6d26b';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  useEffect(() =>{
    getRecipes()
  }, [query])


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(query)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return <div className="App">
    <div className="head">
        <h1><b>The Recipe Project</b></h1>
    </div>
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
        placeholder="Type your favorite ingredients..."/>
      <button className="search-button btn btn-info" type="submit">
        Find Something!
      </button>
    </form>
    <div className="recipes">
    {recipes.map(recipe => 
      <Recipe
          key = {recipe.recipe.label}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />)}
    </div>
    <Footer/>
  </div>;
}

export default App;
