document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list").getElementsByTagName("tbody")[0];
  
    bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get form values
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const genre = document.getElementById("genre").value;
      const year = document.getElementById("year").value;
  
      // Create a new row
      const row = bookList.insertRow();
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${genre}</td>
        <td>${year}</td>
        <td><button onclick="deleteBook(this)">Delete</button></td>
      `;
  
      // Clear the form
      bookForm.reset();
    });
  });
  
  // Function to delete a book row
  function deleteBook(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }
  