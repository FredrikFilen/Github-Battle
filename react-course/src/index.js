import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section classname="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article classname="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://i.pinimg.com/564x/6a/33/09/6a330911364022ab242e42a79959cfc5.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>meow</h1>;
};

const Author = () => <h4>mister meow</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
