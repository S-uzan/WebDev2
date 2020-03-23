var myNumber=42 //var n'a pas de tdz
var otherNumber
otherNumber=26
const anotherNumber=282

let yetAnotherNumber=2323



function add (a, b) {
    return a + b
}

function substraction(a, b) {
    return a - b
}



document.querySelector("#submit")//après #un id
    .addEventListener("click",function writeToChat(event) {
        var message = document.querySelector(".message").value
        var discussionElt = document.querySelector(".discussion")//. c'est pour dire que c'est une classe
        var nickname= document.querySelector("#nickname").value
        
        discussionElt.innerHTML += "<p>" + nickname + ": " + message
    })



