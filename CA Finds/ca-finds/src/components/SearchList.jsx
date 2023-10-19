import "./SearchList.css";
import  SearchResult  from "./SearchResult";
const SearchList=({results})=>{
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
}
export default SearchList