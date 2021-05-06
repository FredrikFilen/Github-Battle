import React from "react";

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

export default Book;
