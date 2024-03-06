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
    var line1 = "This all started because I realised I had way too many clothes so I figured I should clean out my wardrobe. ";
    var line2 = "I also decided to create this website as part of my portfolio to hopefully not be jobless. ";
    var line3 = "If you have any questions just contact me through whatevever. ";
    var line4 = "I appreciate any feedback and hope you find something you like :)";
    return line1 + line2 + line3 + line4;
}

function loadHomeButtons(){
    var buttonDiv = document.createElement("div");
    buttonDiv.id = "homeButtonDiv";
    buttonDiv.className = "homeButtonDiv"

    var center = document.createElement("div");
    center.className = "center";

    var motiveButton = document.createElement("a");
    motiveButton.innerHTML = "WHY DOES THIS EXIST?";
    motiveButton.href = "javascript:scrollToElement(\'motive\',50)";
    motiveButton.className = "motiveBtn";

    buttonDiv.append(center);
    center.append(motiveButton);

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
    card.className = "profile-card";

    var card_img = document.createElement("img");
    card_img.style = "width:100%";
    card_img.src = "img/profile.jpg";

    var card_container = document.createElement("div");
    card_container.className = "profile-card-container";
    card_container.innerHTML = "<h3>Jadon Puertollano</h3> <h4>Occupation: Jobless</h4> ";

    var motiveTextDiv = document.createElement('div');
    var motiveText = document.createElement('p'); 
    motiveText.id = 'motiveText';
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

function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);

    if (element) {
        var offsetPosition = element.offsetTop - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

loadContent("home");