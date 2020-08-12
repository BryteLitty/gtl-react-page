import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import pic from "./img/img1.jpg";

var no = Math.floor(Math.random() * 10);
// adding props 
const Person = ({img, name, job, children}) => {
  // using template literals
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return  (
    <article className ="person">
      <img src={url}></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// now create a component
const PersonList = () =>{
  return(
    <section className="person-list">
      <Person img = "22" name = "emma" job="analyst">
      <p>It's a whole new concept and strictly attention and concerntraton rules applies</p>
      </Person>
      <Person img = "34" name = "litty" job="developer">
        <p>It's a whole new concept and strictly attention and concerntraton rules applies</p>
      </Person>
      <Person img = "32" name = "annor" job="governor">
      <p>It's a whole new concept and strictly attention and concerntraton rules applies</p>
      </Person>
      
    </section>
  )
};





ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));

