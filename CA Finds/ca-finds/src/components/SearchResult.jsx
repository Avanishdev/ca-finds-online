import { Link } from "react-router-dom";
import "./SearchResult.css";
const SearchResult=({result,key})=>{
  const detailsPageURL = `/details/${key}`;
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      <a>{result}</a>
    </div>
  );
}
export default SearchResult 