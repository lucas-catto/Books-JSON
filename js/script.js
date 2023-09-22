
document.addEventListener("DOMContentLoaded", function(){

    fetch('./../Data/Books.json')

        .then(response => response.json())
        .then(data => {
            
            let books = '';

            data.Book.forEach(book => {

                books += `
                    <div class="card">
                        <div id="Image">
                            <img src="${ book.Image }">
                        </div>
                        
                        <div class="data">
                            <div id="Name"  >${ book.Name  }</div>
                            <div id="Price" >${ book.Price }</div>
                        </div>
                        
                    </div>
                `;
            });
            document.getElementById('main').innerHTML = books;
        })
        .catch(error = console.error('Error to find the Books:', error));
});