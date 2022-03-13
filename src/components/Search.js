import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("pro");
  //debounced term to help avoid multiple dependencies in useEffect
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [term]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);
  const renderedResults = results.map(({ title, snippet, pageid }) => {
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button "
            href={`https://en.wikipedia.org?curid=${pageid}`}
            target="_blank"
          >
            go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <div className="label">Eneter Search Term</div>
          <input
            className="input"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
