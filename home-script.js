var url = "https://netfreaks.herokuapp.com";

$(document).ready(function() {

    console.log("aqui");
$.ajax({
    
    url:url,
    type: 'GET',
    async: true,
    success: alert("it's alive!!")
})

})