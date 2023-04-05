//useFetch.js
import { useState, useEffect } from "react";

const useMarkdownFile = (file) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [markdown]);

  return markdown;
};

export default useMarkdownFile;
