console.log('write-book.js is running..');


window.addEventListener('load', function () {



    // Array Of Pages
    var bookPageArray = new Array();

    var pageCount = 0;



    //Save || Show Content On Click Submit
    let bookTextEditorForm = document.getElementById('bookTextEditorForm');
    bookTextEditorForm.addEventListener('submit', bookTextEditorFormFunc);

    //
    let summernote = document.getElementById('summernote');
    var content = document.getElementById('content');

    //New Page
    let summernoteOutputPages = document.getElementById('summernoteOutputPages');
    let newPageBtn = document.getElementById('newPageBtn');
    newPageBtn.addEventListener('click', newPageFunc);

    //Save || Show Content On Click Submit
    function bookTextEditorFormFunc(event) {
        event.preventDefault();
        summernote = document.getElementById('summernote');
        content = document.getElementById('content');

        if (bookPageArray.length === pageCount || bookPageArray.length === pageCount + 1) {
            console.log('added');
            bookPageArray.pop();
            bookPageArray.push(summernote.value);
        }

        console.log(bookPageArray.length);

        var iterator = bookPageArray.values();
        for (let elements of iterator) {

            console.log(elements);
            content.innerHTML = elements;

        }


    }




    //New page
    function newPageFunc(event) {

        event.preventDefault();
        console.log(bookPageArray);
        content.removeAttribute('id');

        console.log('Page Created.' + pageCount);
        pageCount++;
        let html = `
        <div id="content-box" class="shadow-lg p-4 h-100 overflow-hidden">
        
            <div class="float-right">
                <a href="" id="${bookPageArray.length}" value = "${bookPageArray.length}" class="btn btn-outline-primary btn-sm m-2"> <i class="fas fa-edit    "></i> </a>
                <a href="" id="${bookPageArray.length}" value = "${bookPageArray.length}" class="btn btn-sm btn-outline-danger"> <i class="fas fa-trash "></i></a>
            </div>
            <div>
                <h6> Page : ${pageCount + 1} </h6>
            </div>
            <div id="content" class="mt-2">
            </div>
        
        </div>`;
        summernoteOutputPages.insertAdjacentHTML('afterbegin', html)

        summernote = document.getElementById('summernote');
        content = document.getElementById('content');


        bookPageArray.push(summernote.value);

        console.log(summernoteOutputPages);
    }


    //Page EDIT And DELETE

    // let edit = document.querySelectorAll('0');
    // console.log(edit);

    // let del = document.getElementById('0');

    // //EDIT
    // edit.addEventListener('click',(event)=>{
    //     event.preventDefault();
    //     console.log(edit);
    //     console.log('edit');



    // });


    // Set Date And Time

    const date = document.getElementById('date');
    const time = document.getElementById('time');

    var dateTime = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    date.innerText = dateTime.getDate() + "-" + monthNames[dateTime.getMonth()] + "-" + dateTime.getFullYear();

    time.innerText = dateTime.toLocaleString('in', { hour: 'numeric', hour12: true, minute: 'numeric' });

    console.log(dateTime.getDate());
    console.log(monthNames[dateTime.getMonth()]);
    console.log(dateTime.getFullYear());

    console.log(dateTime.getMinutes());
    console.log(dateTime.toLocaleString('en-US', { hour: 'numeric', hour12: true }));





});