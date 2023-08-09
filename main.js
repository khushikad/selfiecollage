var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();


function start() {
   
    recognition.start();


}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    if (content == "take my selfie") {
        speak();


    }
}

function speak() {
    var synth = window.speechSynthesis;
    saythis = new SpeechSynthesisUtterance("Get ready for your first selfie in 5 seconds, second in 7 seconds and third in 10 seconds");
    synth.speak(saythis);

    Webcam.attach(camera);
    setTimeout(function () {
        take1photo();
         save();
    }, 5000);


    Webcam.attach(camera);
    setTimeout(function () {
        take2photo();
         save();
    }, 7000);

    Webcam.attach(camera);
    setTimeout(function () {
        take3photo();
         save();
    }, 10000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90


});

function take1photo() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result1").innerHTML = "<img id='myimage' src='" + data_uri + "'>";
     

    });

}
function take2photo() {
    Webcam.snap(function (data_uri) {
   
        document.getElementById("result2").innerHTML = "<img id='myimage' src='" + data_uri + "'>";
    

    });

}

function take3photo() {
    Webcam.snap(function (data_uri) {
        
        document.getElementById("result3").innerHTML = "<img id='myimage' src='" + data_uri + "'>";

    });

}

function save(){
link=document.getElementById("link");
image=document.getElementById("myimage").src;
link.href=image;
link.click();

}