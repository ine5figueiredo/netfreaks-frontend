var myUrl = "https://netfreaks.herokuapp.com/";

function getData() {
    $.ajax({
        url : myUrl,
        type: 'GET',
        success : handleData
    })
}

function handleData(response) {
    console.log("print");
}