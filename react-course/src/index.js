import React from "react";
import ReactDom from "react-dom";
import { books } from "./Books";
import Book from "./Book";

//css
import "./index.css";

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

ReactDom.render(<BookList />, document.getElementById("root"));
