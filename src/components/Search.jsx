import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import foods from "../data/foods.json";
function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (q) {
      inputValue.current.value = q;

      const foodResults = foods.results
        .filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
        .map((item) => (
          <li key={item.id} class="list-group-item">
            <Link to={`/foods/${item.id}`}>{item.title}</Link>
          </li>
        ));

      setSearchResult(foodResults);
    }

    //Sonsuz döngüye düşücek olursak görmüş
    //oluruz. Datei o yüzden kullandık
    console.log(new Date());
  }, [q]);
  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            ref={inputValue}
          />
        </div>

        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-block mt-2"
            onClick={handleForm}
          >
            Search
          </button>
        </div>
      </form>
      <hr />
      <ul class="list-group mt-3">{searchResult}</ul>
    </>
  );
}
export default Search;
