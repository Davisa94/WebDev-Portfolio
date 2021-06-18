eventsHandler()

let elementListenerSet = new Set();

// Create event handler that takes in an element and a key to bind together.
//Ties a key press event to a certain sound
function keyPressHandlerGenerator(key, soundFile) {

}

//.button[class*="large-"]

function getElementsByDataKey(dataKey) {
    return document.querySelector(`div[data-key='${dataKey}']`)

    //return the actual elements
}

//<audio onended="myFunction()">
//width: transform: translate(0, calc(10px * attr(y)));

function onEndSound() {
    e.target.classList.remove('playing');
}

function setPlaying(audioElement, element) {
    element.classList.add('playing');
    //setTimeout(function() { element.classList.remove('playing'); }, 500);

    //isNaN(x)

    // if (!elementListenerSet.has(element)) {
    //     element.onended = (event) => {
    //         element.classList.remove('playing');
    //     }
    // }

    let y = 0;
    y = parseInt(element.getAttribute("y"));


    if (y > 8 || element.getAttribute("y") === undefined) {
        element.setAttribute("y", 0);
    } else {

        if (isNaN(y)) {
            element.setAttribute("y", 1);
        } else {
            element.setAttribute("y", y + 1);
        }
    }

    element.setAttribute("style", `transform: translate(0px, ${y}px);`);

    audioElement.addEventListener("ended", () => {
        console.log("Ending the audio");
        element.classList.remove('playing');
    }, { once: true });

    // element.onended = (event) => {
    //     element.classList.remove('playing');
    // }

    elementListenerSet.add(element);
}

//calls the keyPressHandlerGenerator for each key we want to generate a handler for
function eventsHandler() {
    // For each key-sound combo create an event handler.
    let audioFiles = getDataKeyAudioPair();
    document.body.addEventListener('keydown', event => {
        console.log("Key is pressed!");
        let rawKey = event.key;
        let upperKey = rawKey.toUpperCase();
        let pressedKey = upperKey.charCodeAt(0);
        let elementToClass = getElementsByDataKey(pressedKey);
        console.log(elementToClass);
        console.log(pressedKey)
        let sound = audioFiles[pressedKey];
        setPlaying(sound, elementToClass);
        if (sound !== undefined) {
            //Play the sound
            //sound.stop();
            sound.pause();
            sound.currentTime = 0;
            sound.play();
        }

        // switch (event.charCode){
        //     case 
        // }
    })

}

//returns a list of data-keys
function getDataKeyAudioPair() {
    let dataKeys = {};
    let elements = document.querySelectorAll('audio');
    elements.forEach(e => {
        let dataKey = e.getAttribute('data-key')
        let soundFile = e.getAttribute('src')
        dataKeys[dataKey] = e;
    })
    return dataKeys;
}