var destUrl = "https://netfreaks.herokuapp.com/home/feed/";

$.get(destUrl, successCallback);

function successCallback(response) {

    var usersTable = $("#users-list");
    var blob;
    var row = $("<tr height='200px'></tr>");
    var cell;

for (var x = 1; x <= response.length; x++) {

 blob = "<div class='card' height='150px'><div class='card-body'><img src='" + response[x].picture + "' class='card-img-top'><h5 class='card-title'>" 
    + response[x].name + "  " + response[x].age + "</h5><p class='card-text'><b>" + response[x].kinks 
    + "</b></p></div><button type='button' id='" + response[x].name + "' class='btn btn-primary'>See more ;)</button></div>";

cell = $("<td width=\"50%\" height='200px'></td>").html(blob);
row.append(cell);
        
if (x % 2 == 0) {
    usersTable.append(row);
    row = $("<tr height='200px'></tr>");
}
}
$(".btn-primary").on("click", openPopUp);

}
function openPopUp(data) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


