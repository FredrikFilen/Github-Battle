import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";

//setup vars

const books = [
  {
    id: 1,
    img:
      "https://i.pinimg.com/564x/6a/33/09/6a330911364022ab242e42a79959cfc5.jpg",
    title: "Meow Meow Mothafucka",
    author: "Mister Meow",
  },

  {
    id: 2,
    img: "https://i.ytimg.com/vi/ndsaoMFz9J4/hq720.jpg",
    title: "hurrrrrr",
    author: "katt",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/ndsaoMFz9J4/hq720.jpg",
    title: "hurrrrrr",
    author: "katt",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title } = props;

  //attribute, eventhandler
  const clickHandler = () => {
    alert("asdasd");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
