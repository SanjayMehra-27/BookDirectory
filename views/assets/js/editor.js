
window.onload = function () {

    $('#summernote').summernote({
        placeholder: ' Write Your Book Here ',
        tabsize: 2,
        height: 400, // set editor height
        minHeight: 300, // set minimum height of editor
        maxHeight: 500, // set maximum height of editor
        // set focus to editable area after initializing summernote
    });

    function summernoteInputFunc() {
        var markupStr = $('#summernote');
        const summernoteOutput = document.getElementById('summernoteOutput')

        console.log(summernote);
        summernoteOutput.innerHTML = markupStr.summernote('code');

    }


    /* To Know More .. */
    /* https://summernote.org/getting-started/#basic-api */


    $(document).ready(function () {
        $('#summernote').summernote();
    });
}