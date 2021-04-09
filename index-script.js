var myUrl = "https://netfreaks.herokuapp.com/login";

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