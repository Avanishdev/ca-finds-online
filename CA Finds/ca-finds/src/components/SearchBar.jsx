
import { useState } from "react";
import "./SearchBar.css";

const SearchBar=({setResults})=>{
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("../CA.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className=" w-[70%]  ">
      <input
        className="[background-color:white] p-[10px] rounded-3xs"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
        
    </div>
  );
  
}

export default SearchBar;