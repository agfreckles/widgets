import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [result, setResult] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedText(text);
    }, 1500);
    return () => {
      clearTimeout(timerID);
    };
  }, [text]);
  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: KEY,
          },
        }
      );
      setResult(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [language, debouncedText]);
  return <div className="ui header">{result}</div>;
};
export default Convert;
