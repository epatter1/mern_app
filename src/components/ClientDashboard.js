import React, { useState, useEffect } from "react";

const ClientDashboard = (props) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://anapioficeandfire.com/api/books"
      );
      const data = await response.json();

      // store the data into our books variable
      setBooks(data);
    }
  },[books]);

    return (
      <div>
        <h1>Game of Thrones Books</h1>

        {/* display books from the API */}

        {/* <button onClick={setBooks(props.data)}>GOT Books</button> */}


        {books && (
          <div className="books">
            {/* loop over the books */}
            {books.map((book, index) => (
              <div key={index}>
                <h4>{book.name}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

export default ClientDashboard;
