console.log('write-book-cover.js is running..');


window.addEventListener('load', function () {


    /* Title */
    const bookTitleInput = document.getElementById('bookTitleInput');
    bookTitleInput.addEventListener('input', bookTitleInputFunc)

    function bookTitleInputFunc(event) {

        const bookTitle = document.getElementById('bookTitle');
        bookTitle.innerText = `${bookTitleInput.value}`;
    }

    /* Sub-Title */
    const bookSubTitleInput = document.getElementById('bookSubTitleInput');
    bookSubTitleInput.addEventListener('input', bookSubTitleInputFunc)

    function bookSubTitleInputFunc(event) {

        const bookSubTitle = document.getElementById('bookSubTitle');
        bookSubTitle.innerText = `${bookSubTitleInput.value}`;
    }

    /* Author */
    const bookAuthorInput = document.getElementById('bookAuthorInput');
    bookAuthorInput.addEventListener('input', bookAuthorInputFunc)

    function bookAuthorInputFunc(event) {

        const bookAuthor = document.getElementById('bookAuthor');
        bookAuthor.innerText = `${bookAuthorInput.value}`;
    }

    /* Theme */
    const bookThemeInput = document.getElementById('bookThemeInput');
    bookThemeInput.addEventListener('input', bookThemeInputFunc)

    function bookThemeInputFunc(event) {

        const bookTheme = document.getElementById('bookTheme');
        const bookBorderBox = document.getElementById('bookBorderBox');

        const themeName = bookThemeInput.value;

        console.log(bookBorderBox.classList.length);

        if (bookBorderBox.classList.length == 0) {
            bookBorderBox.classList.add(themeName);
        }
        else {

            bookBorderBox.classList.replace(bookBorderBox.classList[0], themeName)
        }

        // bookBorderBox.classList.replace(bookBorderBox.value,themeName);
        bookTheme.innerText = ``;


    }

    /* Genre */
    const genreInput = document.getElementById('genreInput');
    genreInput.addEventListener('input', genreInputFunc)

    function genreInputFunc(event) {

        const Genre = document.getElementById('Genre');
        const genreName = genreInput.value;

        Genre.innerText = `${genreName}`;


    }

    /* Book Summary */
    const bookSummaryInput = document.getElementById('bookSummaryInput');
    bookSummaryInput.addEventListener('input', bookSummaryInputFunc)

    function bookSummaryInputFunc(event) {

        const bookSummary = document.getElementById('bookSummary');
        bookSummary.innerText = `${bookSummaryInput.value}`;
    }





    // const bookCoverForm = document.getElementById('bookCoverForm');

    // bookCoverForm.addEventListener('click',bookCoverFormFunc);

    // function bookCoverFormFunc(event) {

    //     console.log(bookCoverForm);


    // }





    // const bookCoverBox = document.getElementById('bookCoverBox');

    // bookCoverBox.addEventListener('',bookCoverBoxFunc);

    // function bookCoverBoxFunc(event) {
    //     const bookTitle = document.getElementById('bookTitle');
    //     const bookSubTitle = document.getElementById('bookSubTitle');
    //     const bookAuthor = document.getElementById('bookAuthor');
    //     const bookLogo = document.getElementById('bookLogo');
    //     const bookSummary = document.getElementById('bookSummary');


    //     bookTitle.innerHTML = ` <input type="text" class="form-control form-inline " value="Title Of The Book"> `;

    //     console.log(bookAuthor);

    //   console.log('fire');          
    // }

    // console.log(bookCoverBox);


})
