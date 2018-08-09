const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref()

/**
 * Updates the database with the username and message.
//  */
// function nameFunction(){
//     randUser = Math.random()
// }
let letterArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]
let characterGen1 = Math.floor(Math.random()*26)
let characterGen2 = Math.floor(Math.random()*26)
let characterGen3 = Math.floor(Math.random()*26)
let characterGen4 = Math.floor(Math.random()*26)
randUser = letterArray[characterGen1] + letterArray[characterGen2] + letterArray[characterGen3] + letterArray[characterGen4]// + (Math.floor(Math.random()*10))
usernameElement.innerHTML = "NOT ASSIGNED";
function updateDB(event){
    event.preventDefault();
    let username        = randUser//usernameElement.value;
    let message         = messageElement.value;

    // usernameElement.value = "";
    // nameFunction()
    usernameElement.innerHTML = randUser;
    messageElement.value  = "";

    //console.log(username + " : " + message);

    //Update database here
    if(message =="/lenny"){
        message = "( ͡° ͜ʖ ͡°)"
    }else if(message =="/lennygang"){
        message = "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)"
    }else if(message =="/cool"){
        message = "(⌐■ ͜ʖ■)"
    }else if(message =="/gun"){
        message = " ̿ ̿'̿'̵͇̿з=(⌐■ʖ■)=ε/̵͇̿/'̿̿ ̿ ̿"
    }else if(message =="/eyebrows"){
        message = "( ̿ ̿ ̿ ̿ ̿ ̿ ̿ ̿°̿ ̿ ̿ ̿ ̿ ͜ʖ ̿ ̿ ̿ ̿ ̿ ̿ ̿°̿ ̿ ̿ ̿ ̿ ̿ ̿ )"
    }else if(message =="/disapprove"){
        message = "( ͡° ʖ̯ ͡°)"
    }else if(message =="/shrug"){
        message = "乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ"
    }
    const value = {
        NAME:username,
        MESSAGE:message
    }
    database.push(value)
}
const messageContainer = document.querySelector(".allMessages")
// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard)
function addMessageToBoard(rowData){
    const row = rowData.val()
    const name = row.NAME
    const message = row.MESSAGE

    const pElement = document.createElement("p")
    pElement.innerText = name + " : " + message
    messageContainer.appendChild(pElement)
}