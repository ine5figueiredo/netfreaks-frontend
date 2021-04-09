var destUrl = "http://netfreaks.herokuapp.com/home/feed/";
$.get(destUrl, successCallback);
function successCallback(response) {
    var usersTable = $("#users-list");
    var blob;
    var row = $("<tr></tr>");
    var cell;
    var count = 0;
    response.forEach(function() {
        count++;
        for (let element in response) {
            blob = "<div class=\"card\"><img src=\"" + element.picture + "\" class=\"card-img-top\"><div class=\"card-body\">" + 
            "<h5 class=\"card-title\">" + element.name + "  " + element.age + "</h5><p class=\"card-text\"><b>" + element.kinks + "</b></p>"
            "<p class=\"card-text\">" + 
            element.aboutMe + "</p></div></div>";
            cell = $("<td></td>").text(blob);
            row.append(cell);
        }
        if (count % 2 == 0) {
            usersTable.append(row);
            row = $("<tr></tr>");
        }
    });
}