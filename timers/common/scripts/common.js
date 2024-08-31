/* Loading function */
const ON_LOAD = () => {
    READ_SETTINGS();
    UPDATE_VOL_ALERT();
    HIDE_IMAGE(document.getElementById('hide_image').checked);
}

const START_COUNTDOWN = () => {
    document.getElementById("timer_offset").textContent = 0;
    if (document.getElementById("use_countdown").checked) {
        document.getElementById("text").innerText = "6";
        TIMER = setTimeout(function() { COUNTDOWN(5); },1000);
    }
    else {
        START_TIMER();
    }
}

const COUNTDOWN = (counter) => {
    if (counter === 0) {
        if (document.getElementById("volume_alert").value > 0) {
            document.getElementById("alert_sound").play();
        }
        volume_voice = document.getElementById('volume_voice').value;
        if (volume_voice > 0) {
            try {
                responsiveVoice.speak("Fight starting!",document.getElementById("voice_sound_choice").value,{volume: volume_voice/10});
            }
            catch {
                document.getElementById("splash").innerHTML = "<div>Text to speech is not functioning correctly, it may be blocked by your pop-up blocker.<div id='close_splash' class='close-splash' onclick='TOGGLE_VISIBILITY(\"splash\",\"hidden\")'>X&nbsp;</div></div><div>Turn the voice volume to 0 to stop this message re-appearing.</div>";
                TOGGLE_VISIBILITY("splash","visible");
            }
        }
        START_TIMER();
    }
    else {
        document.getElementById("text").innerText = counter;
        if (((counter)%2 === 0) && (document.getElementById("volume_alert").value > 0)) {
            document.getElementById("alert_sound").play();
        }
        TIMER = setTimeout(function() { COUNTDOWN(counter-1); },1000);
    }
}

/* Stop the current timer */
const STOP_TIMER = (fulltime) => {
    console.log(Date.now());
    if (TIMER) {
        clearTimeout(TIMER);
        TOGGLE_DISTRACTION("visible");
        document.getElementById("display").style.border = "2px solid #eaeaea";
        document.getElementById("text").innerText = "...Waiting...";
        document.getElementById("start").disabled = false;
        document.getElementById("time").innerText = fulltime;
    }
    else {
        alert("Timer doesn't exist, or you might have caught it at the wrong time.  Please try again.");
    }
}

/* Set the timer offset for adjusting the timer during a fight */
const ADJUST_OFFSET = (offset) => {
    curroffset = parseInt(document.getElementById("timer_offset").textContent);
    document.getElementById("timer_offset").textContent = curroffset + offset;
}

/* Change the alert volume */
const UPDATE_VOL_ALERT = () => {
    let volume = document.getElementById('volume_alert').value;
    document.getElementById('alert_sound').volume = volume/10;
    if (volume === 0) {
        document.getElementById("alert_status").innerText = "Alert sound disabled";
    }
    else {
        document.getElementById("alert_status").innerText = "";
    }
}

/* Change the alert sound when one is select from the drop down */
const UPDATE_ALERT_SOUND = () => {
    sound = document.getElementById("alert_sound_choice").value;
    document.getElementById("alert_sound_src").src = "../common/sounds/"+sound+".mp3";
    document.getElementById("alert_sound").load();
    document.getElementById("alert_sound").play();
}
/* Test the volume of the alert */
const TEST_VOL_ALERT = () => {
    document.getElementById("alert_sound").load();
    document.getElementById("alert_sound").play();
}

/* Change the voice volume */
const UPDATE_VOL_VOICE = () => {
    let volume = document.getElementById('volume_voice').value;
    if (volume == 0) {
        document.getElementById("voice_status").innerText = "Voice disabled";
    }
    else {
        document.getElementById("voice_status").innerText = "";
    }
}

/* Test the volume of the voice */
const TEST_VOL_VOICE = () => {
    voice = document.getElementById('voice_sound_choice').value
    volume = document.getElementById('volume_voice').value/10
    responsiveVoice.speak('Testing volume',voice,{'volume': volume});
}

/* Hides all the distracting elements around the timer */
const TOGGLE_DISTRACTION = (state) => {
    const ptable = ["return","settings","cookie_control","footer"];
    ptable.forEach(element => {
        TOGGLE_VISIBILITY(element,state);
    });
    TOGGLE_DISPLAY("splash","none");
    TOGGLE_DISPLAY("warning","none");
}

/* Function to change the visibility of an element */
const TOGGLE_VISIBILITY = (elementid, state) => {
    document.getElementById(elementid).style.visibility = state;
}

/* Function to change the display of an element */
const TOGGLE_DISPLAY = (elementid, state) => {
    let popupstate = GET_COOKIE(elementid+"_closed");
    if (popupstate !== "true") {
        document.getElementById(elementid).style.display = state;
        if (state === "none") {
            const expiry = new Date(Date.now()+(365*24*60*60*1000)).toUTCString();
            switch (elementid) {
                case "splash":
                    document.cookie = "splash_closed=true; expires="+expiry;
                break;
                case "warning":
                    document.cookie = "warning_closed=true; expires="+expiry;
                break;
            }
        }
    }
}

/* Function to remove background image from timer page :( */
const HIDE_IMAGE = (state) => {
    if (state) {
        document.getElementById("display").classList.remove("top-background");
        document.getElementById("settings").classList.remove("bottom-background");
    }
    else {
        document.getElementById("display").classList.add("top-background");
        document.getElementById("settings").classList.add("bottom-background");
    }
}

/* Function to check if a variable exists */
const CHECK_EXISTS = (item) => {
    try {
        if ((typeof item === 'undefined') || (item === undefined)) {
            return false;
        }
        else {
            return true;
        }
    }
    catch {
        return false;
    }
}

/* Function to read cookies */
const GET_COOKIE = (cookiename=0) => {
    let settingsarray = [];
    let recoveredsettings = document.cookie.split(";");
    for(let i = 0; i < recoveredsettings.length; i++) {
        if (recoveredsettings[i].charAt(0) === " ") {
            recoveredsettings[i] = recoveredsettings[i].substring(1);
        }
        let settingtemp = recoveredsettings[i].split("=");
        settingsarray[settingtemp[0]] = settingtemp[1];        
    }
    if (cookiename !== 0) {
        if (CHECK_EXISTS(settingsarray[cookiename])) {
            return settingsarray[cookiename];
        }
        else {
            return "cookieerror";
        }
    }
    else {
        return settingsarray;
    }
}