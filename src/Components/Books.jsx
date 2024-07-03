import React from "react";
import BookCard from "./BookCard";
const bookList = [
    {
      name: "Crafting Interpreters (Not actively reading)",
      link: "https://craftinginterpreters.com/",
    },
    {
      name: "Computer Systems: A Programmer's Perspective",
      link: "https://csapp.cs.cmu.edu/",
    },
    {
      name: "Zero to One by Peter Theil",
    },
  ];
  
const Books = () => {
  return (
    <div className="w-full p-5">
   <div className="header py-3">
   <h1 className="text-4xl font-semibold">Books</h1>
      <p className="text-md w-full ">
        Here are the book(s) I'm reading right now.{" "}
      </p>
   </div>
      <div className="book-list flex flex-col gap-5">
         {bookList.map((e,i)=>{
            return <BookCard name={e.name} link={e.link} key={i}/>
         })}
      </div>
    </div>
  );
};

export default Books;
