import React from "react";

import ReactMarkdown from "react-markdown";
import { marked } from "marked";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = React.useState("# sup");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} />

      <ReactMarkdown className="preview" children={markdown} />
      
      {/* <div className="preview"  dangerouslySetInnerHTML={{__html:marked.parse(markdown) }} /> */}
    </div>
  );
}

export default App;
