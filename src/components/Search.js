import React, { useEffect, useState } from "react";
import axios from "axios";
import { getByTitle } from "@testing-library/react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    setTimeout(() => {
      if (term) search();
    }, 500);
  }, [term]);
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
