function loadContent(contentType){
    document.getElementById('app').innerHTML="";
    switch (contentType) {
        case "home":
            loadTitle();
            loadHomeButtons();
            break;
        default:
            break;
    }
}

function loadHomeButtons(){
    var buttonDiv = document.createElement("div");
    buttonDiv.id = "homeButtonDiv";
    buttonDiv.className = "homeButtonDiv"

    var center = document.createElement("div");
    center.className = "center";

    var motiveButton = document.createElement("button");
    motiveButton.innerHTML = "Why does this exist?";

    var homeButton = document.createElement("button");
    homeButton.innerHTML = "View Products";

    buttonDiv.append(center);
    center.append(motiveButton);
    center.append(homeButton);

    document.getElementById('app').appendChild(buttonDiv);
}

function loadTitle(){
    var titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";
    titleDiv.className = "titleDiv";

    var title = document.createElement("h1");
    title.innerHTML = "JADON'S (DAD's) WARDROBE";
    titleDiv.append(title);

    document.getElementById('app').appendChild(titleDiv);
}

loadContent("home");