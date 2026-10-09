window.onload = setupFunction;

function setupFunction() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";
    var postBtn = document.getElementById("postButton");
    postBtn.onclick = postFunction;

    var clearBtn = document.getElementById("clearButton");
    clearBtn.onclick = clearFunction;
}
var postCount = 0;
function postFunction() {
    var textMessage = document.getElementById("message").value;
    if (postCount == 0) {
        document.getElementById("topic").innerHTML = textMessage;
    } else if (postCount == 1) {
        document.getElementById("reply1").innerHTML = textMessage;
    } else if (postCount == 2) {
        document.getElementById("reply2").innerHTML = textMessage;
    }
    document.getElementById("message").value = "";
    postCount++;
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    document.getElementById("message").value = "";
    postCount = 0;
}