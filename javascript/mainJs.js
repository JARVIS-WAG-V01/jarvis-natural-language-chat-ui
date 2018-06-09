var local = {};

var remote = {};
var SESSIONID = generateUUID();
var accessToken = "9be02fefb0f34c95ac896fe92c0614ca";
var dpaccessToken = "c525ea6281f74869830f778993746caa";
var baseUrl = "https://api.api.ai/v1/";
var Opurl = "https://nwave-output-v1.herokuapp.com/getop/";
var url = Opurl + SESSIONID;

function formatTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function insertChat(who, text) {
    var control = "";
    var date = formatTime(new Date());

    if (who == "local") {

        control = '<li style="width:100%;float:right;">' +
            '<div class="msj-rta macro">' +
            '<div class="text text-r">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '</li>';
    } else {
        control = '<li style="width:100%;align:right;">' +
            '<div class="msj macro">' +
            '<div class="text text-l">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
    }
    $("#messages").append(control);
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight;
}

$("#chat-panel").on('click', function() {
    var framewidth = $("#frame").width();
    var op = "";
    if (framewidth > 200) {
        framewidth = "175";
        op = "0.1";

    } else {
        framewidth = "370";
        op = "1";

    }
    $(".innerframe").animate({
        height: 'toggle',
        opacity: op
    });
    $('#frame').animate({
        width: framewidth,
        background: "black"
    });
});

function resetChat() {
    $("#messages").empty();
}


$(".mytext").on("keyup", function(e) {
    if (e.which == 13) {
        var text = $(this).val();
        if (text !== "") {
            insertChat("local", text);
            $(this).val('');
            queryBot(text)
        }
    }
});

resetChat();

function queryBot(text) {
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20150910",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({
            query: text,
            lang: "en",
            sessionId: SESSIONID
        }),

        success: function(data) {

            displayOutput(data.result.fulfillment.displayText);
            insertChat("remote", data.result.fulfillment.speech);
        },
        error: function() {
            insertChat("remote", "Sorry Jarvis has faced some issues! Please try again later");
        }
    });
}

function queryDpBot(text) {
    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20150910",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + dpaccessToken
        },
        data: JSON.stringify({
            query: text,
            lang: "en",
            sessionId: SESSIONID
        }),

        success: function(data) {

            displayDpOutput(data.result.action,'Hi');
            insertChat("remote", data.result.fulfillment.speech);
        },
        error: function() {
            insertChat("remote", "Sorry ULTRON has faced some issues! Please try again later");
        }
    });
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

$(document).ready(function() {
    $("#myHref").click(function(event) {
        document.getElementById("myData").setAttribute('data', url);
        //document.getElementById("myData").setAttribute('data','file:///D:/Guna/POCs/ML/nwave-UI/output.html');
        $("#myData").show();
        $("#myHref").hide();
        $("#closeOp").show();
        return false;
    });
});
$("#closeOp").click(function() {
    $("#loading").hide();
    document.getElementById("myData").setAttribute('data', "");
    $("#closeOp").hide();
    $("#myData").hide();
    $("#myHref").show();
});

function displayOutput(input) {
    if (input === 'LOAD-PAGE') {
        document.getElementById("myData").setAttribute('data', url);
        //document.getElementById("myData").setAttribute('data','https://nwave-ideabot-flask-webhook-p.herokuapp.com/getop/TESTINPUT1');
        $("#myData").show();
        $("#myHref").hide();
        $("#closeOp").show();
    }
}

function displayOutput(input) {
    if (input === 'dp') {
        document.getElementById("myData").setAttribute('data', url);
        //document.getElementById("myData").setAttribute('data','https://nwave-ideabot-flask-webhook-p.herokuapp.com/getop/TESTINPUT1');
        $("#myData").show();
        $("#myHref").hide();
        $("#closeOp").show();
    }
}


document.getElementById("health").onmouseover = function() {mouseOver1()};
document.getElementById("health").onmouseout = function() {mouseOut1()};

function mouseOver1() {
   $("#panel1").show();
}

function mouseOut1() {
    $("#panel1").hide();
}

document.getElementById("check").onmouseover = function() {mouseOver2()};
document.getElementById("check").onmouseout = function() {mouseOut2()};

function mouseOver2() {
   $("#panel2").show();
}

function mouseOut2() {
    $("#panel2").hide();
}

document.getElementById("plan").onmouseover = function() {mouseOver3()};
document.getElementById("plan").onmouseout = function() {mouseOut3()};

function mouseOver3() {
   $("#panel3").show();
}

function mouseOut3() {
    $("#panel3").hide();
}


document.getElementById("verify").onmouseover = function() {mouseOver4()};
document.getElementById("verify").onmouseout = function() {mouseOut4()};

function mouseOver4() {
   $("#panel4").show();
}

function mouseOut4() {
    $("#panel4").hide();
}


