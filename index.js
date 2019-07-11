import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
  return(
    <div>
      <h1>Pallavi Gondane</h1>
      <p>This paragraph is about me</p>
      <ul>
        <li>Japan</li>
        <li>Sri lanka</li>
        <li>China</li>
      </ul>
    </div>
  )
}


ReactDOM.render(<MyInfo/>, document.getElementById("root"))