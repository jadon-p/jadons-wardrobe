function loadContent(contentType){
    document.getElementById('app').innerHTML="";
    switch (contentType) {
        case "home":
            loadTitle();
            loadHomeButtons();
            loadMotive();
            break;
        case "products":
            loadTitle();
            break;
        case "contact":
            break;
        default:
            break;
    }
}

function generateMotiveText(){
    var line1 = "This all started because I realised I had way too many clothes so I decided to start cleaning out my wardrobe. ";
    var line2 = "I also decided to created this website as part of my portfolio to hopefully stop being jobless. ";
    var line3 = "I appreciated any feedback and hope you find something you like :)";
    return line1 + line2 + line3;
}

function loadHomeButtons(){
    var buttonDiv = document.createElement("div");
    buttonDiv.id = "homeButtonDiv";
    buttonDiv.className = "homeButtonDiv"

    var center = document.createElement("div");
    center.className = "center";

    var motiveButton = document.createElement("a");
    motiveButton.innerHTML = "Why does this exist?";
    motiveButton.href = "#motive";
    motiveButton.className = "motiveBtn";

    /*var homeButton = document.createElement("button");
    homeButton.innerHTML = "View Products";*/

    buttonDiv.append(center);
    center.append(motiveButton);
    /*center.append(homeButton);*/

    document.getElementById('app').appendChild(buttonDiv);
}

function loadMotive(){
    /*Title */
    var motiveTitleDiv = document.createElement("div");
    motiveTitleDiv.id = "motive";
    motiveTitleDiv.className = "motiveTitleDiv";

    var motiveTitle = document.createElement("h2");
    motiveTitle.innerHTML = "SO WHY DOES THIS EXIST?";

    motiveTitleDiv.append(motiveTitle);

    /*Content*/
    var motiveDiv = document.createElement("div");
    motiveDiv.className = "motiveDiv";
    
    var card = document.createElement("div");
    card.className = "card";

    var card_img = document.createElement("img");
    card_img.style = "width:100%";
    card_img.src = "img/profile.jpg";

    var card_container = document.createElement("div");
    card_container.className = "card-container";
    card_container.innerHTML = "<h4><b>Jadon Puertollano</b></h4> <p>Jobless</p> ";

    var motiveTextDiv = document.createElement('div');
    var motiveText = document.createElement('p'); 
    motiveText.style = "padding-left:20%;padding-right:20%;font-size:2vh;";
    motiveText.innerHTML = generateMotiveText();

    card.append(card_img);
    card.append(card_container);
    motiveTextDiv.append(motiveText);
    motiveDiv.append(card);
    motiveDiv.append(motiveTextDiv);

    /*Footer*/
    var motiveButtonDiv = document.createElement("div");
    motiveButtonDiv.className = "motiveBtnDiv";

    var productButton = document.createElement("a");
    productButton.id = "productBtn";
    productButton.innerHTML = "View Products";
    productButton.href = "javascript:loadContent(\"products\")";
    productButton.className = "motiveBtn";

    var center2 = document.createElement("div");
    center2.className = "center";

    motiveButtonDiv.append(center2);
    center2.append(productButton);
    
    /*Adding elements to screen*/
    document.getElementById('app').appendChild(motiveTitleDiv);
    document.getElementById('app').appendChild(motiveDiv);
    document.getElementById('app').appendChild(motiveButtonDiv);
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