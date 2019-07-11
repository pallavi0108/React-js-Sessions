import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<div><h1>Hello World</h1> <p>this is a paragraph</p></div>,document.getElementById("root"))
// Now this render is technique for sharing code between React components using a prop whose value is a function. and so we need to see about what is to be rendered and where it has to be rendered which is in "root" id in index.html
//here we are writing jsx which is "<h1>" in this case, now the point to remembered is that we cannot render TWO jsx 