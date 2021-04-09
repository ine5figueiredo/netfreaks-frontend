var url = "https://netfreaks.herokuapp.com";

$("#login").on("click", tryLogin);

function tryLogin() {
    
    $.ajax({
        url: "http://netfreaks.herokuapp.com/home/login",
        type: 'POST',
        data: JSON.stringify({
            "username": "luigi",
            "password": "iamluigi"
        }),
        async: true,
        contentType: 'application/json',
        success: function() {console.log("suc")},
        error: function() {console.log("fail")}
        })
}

function doLogin() {
console.log("success");
}