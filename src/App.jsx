import { useEffect, useState } from "react";
import "./App.css";
import allCountries from "./data/data";
import Countrycard from "./components/Countrycard";
import useLocalStorage from "use-local-storage";
// import  Moon from './moon-regular.svg'

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const defaultDark = window.matchMedia("(prefers-color-sheme:dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function hanldeSearch() {
    const results = allCountries.filter((obj) => {
      if (obj.name.toLocaleLowerCase().startsWith(input)) {
        return obj;
      }
      if(obj.region === input){
        return obj
      }
    });
    setSearchResults(results);
  }

  useEffect(() => {
    hanldeSearch();
  }, [input]);

  return (
    <>
      <div className="App" data-theme={theme}>
        <main>
          <nav>
            <h3>Where in the world?</h3>
            <button
              onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
            >
              {theme === "dark" ? "Light Mode" :'Dark Mode' }
            </button>
          </nav>
          <div className="search-box">
            <input
              id="search-input"
              onChange={(e) => setInput(e.target.value)}
              placeholder="search"
            ></input>
            <div className="filter">
              <select className="filter-input" onChange={(e) => setInput(e.target.value)} name="region">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
           
          </div>
          <div className="container">
            {searchResults ? (
              searchResults.map((item) => (
                <Countrycard
                  key={crypto.randomUUID()}
                  imgURL={item.flag}
                  name={item.name}
                  region={item.region}
                  population={item.population}
                  capital={item.capital}
                />
              ))
            ) : (
              <div>Data is loading..</div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
