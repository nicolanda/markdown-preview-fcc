import { useState } from "react";
import { marked } from "marked";
import "./App.css";

/*
  a heading element (H1 size), 
  a sub heading element (H2 size), 
  a link, inline code, 
  a code block, 
  a list item, 
  a blockquote, an image, and bolded text.
*/
function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  [github code](https://github.com/nicolanda/markdown-preview-fcc)
  \`code\`

  \`\`\`	
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  List item
  - first item
  - second item
  - third item

  > blockquote

  ![poro](https://i.pinimg.com/474x/93/50/c4/9350c4f882fc50f4f31a5dcaaa8801b7.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="app">
      <div className='markdownContainer'>
        <div className='markdownText'>
          <div className='markdownTitle'>
            <h2>Markdown Previewer</h2>
          </div>
          <p>
            Enter markdown in the editor to see the preview in the previewer.
          </p>
          <p>
            Simple solution to fcc markdown previewer challenge. I used {"react and marked.js"} to solve this challenge.
          </p>
          <p>
            if you want to see the code, you can find it on my github: <a
            href='https://github.com/nicolanda/markdown-preview-fcc'
            target={'_blank'}>Github code</a>
          </p>
          <p>
            <b>Note:</b> No responsive design, only for desktop.
          </p>
        </div>
        <div className='textAreaCon'>
          <textarea
            className='editor'
            id="editor"
            cols="30"
            rows="10"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </div>
      </div>
      <div className='previewContainer'>
        <div className='previewTitle'>
          <h2>Preview</h2>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
