var TIMER;

/* Start the timer */
const START_TIMER = () => {
    now = Date.now();
    console.log(now);
    let delay = 0;
    if (document.getElementById("lower_prec").checked) {
        delay = 800;
    }
    else {
        delay = 200;
    }
    let totaltime = 0;
    let settings = {
        cannons: [
            (document.getElementById("scannon").value?document.getElementById("scannon").value:"location"),
            (document.getElementById("wcannon").value?document.getElementById("wcannon").value:"location"),
            (document.getElementById("ncannon").value?document.getElementById("ncannon").value:"location"),
            (document.getElementById("ecannon").value?document.getElementById("ecannon").value:"location")
        ],
        cannonrunners: [
            document.getElementById("cannons1").value,
            document.getElementById("cannons2").value
        ],
        personalerts: [
            document.getElementById("alert_cannons1").checked,
            document.getElementById("alert_cannons2").checked
        ],
        alerts: {
            alert_5sec: document.getElementById("alert_5sec").checked,
            alert_throw: document.getElementById("alert_throw").checked
        }
    };
    document.getElementById("start").disabled = true;
    document.getElementById("display").style.border = "2px solid #cf3e3e";
    if (document.getElementById("no_distraction").checked) {
        TOGGLE_DISTRACTION("hidden");
    }
    TIMER = setTimeout(function() { INTERVAL_CHECK(delay,totaltime,JSON.parse(JSON.stringify(originaltimes)),settings,0,now); },delay);
}

/* Timer Loop */
const INTERVAL_CHECK = async (delay,totaltime,times,settings,timeout,finishtime) => {
    let starttime = Date.now();
    let overflow = (starttime-finishtime)-delay;
    let offset = parseInt(document.getElementById("timer_offset").textContent);

    totaltime+=(delay+overflow)+offset;
    if (offset !== 0) {
        document.getElementById("timer_offset").textContent = 0;
    }
    if (overflow < 0) {
        overflow = 0;
    }
    let maxtime = 540000;
    if (timeout > 0) {
        timeout--;
    }
    else {
        document.getElementById("text").innerText = "";
    }
    if (totaltime < maxtime) {
        try {
            alert_index = times.findIndex(time => time.time == Math.round(totaltime/1000,0));
        }
        catch {
            console.log("Error in event lookup");
            return;
        }
        if (alert_index > 0) {
            if (times[alert_index].sound !== 1) {
                let text2show = "";
                switch(times[alert_index].type) {
                    case '5sec':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_5sec)) {
                            text2show = settings.cannonrunners[times[alert_index].person-1]+" to "+settings.cannons[times[alert_index].target-1];
                        }
                    break;
                    case 'throw':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_throw)) {
                            text2show = "Throw bomb to "+settings.cannons[times[alert_index].target-1]+", next up "+settings.cannons[times[alert_index].nexttarget-1];
                        }
                    break;
                }
                if (text2show !== "") {
                    document.getElementById("text").innerText = text2show;
                    if (document.getElementById("lower_prec").checked) {
                        timeout = 8;
                    }
                    else {
                        timeout = 30;
                    }
                    if (document.getElementById("volume_alert").value > 0) {
                        document.getElementById("alert_sound").play();
                    }
                }
                times[alert_index].sound = 1;

            }
            else if((times[alert_index].voice !== 1) && (document.getElementById("volume_voice").value > 0)) {
                let text2speak = "";
                switch(times[alert_index].type) {
                    case '5sec':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_5sec)) {
                            text2speak = settings.cannonrunners[times[alert_index].person-1]+" to "+settings.cannons[times[alert_index].target-1];
                        }
                    break;
                    case 'throw':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_throw)) {
                            text2speak = "Throw bomb to "+settings.cannons[times[alert_index].target-1]+", next up "+settings.cannons[times[alert_index].nexttarget-1];
                        }
                    break;
                }
                if (text2speak !== "") {
                    volume_voice = document.getElementById('volume_voice').value;
                    try {
                        responsiveVoice.speak(text2speak,document.getElementById("voice_sound_choice").value,{volume: volume_voice/10});
                    }
                    catch {
                        document.getElementById("splash").innerHTML = "<div>Text to speech is not functioning correctly, it may be blocked by your pop-up blocker.<div id='close_splash' class='close-splash' onclick='TOGGLE_VISIBILITY(\"splash\",\"hidden\")'>X&nbsp;</div></div><div>Turn the voice volume to 0 to stop this message re-appearing.</div>";
                        TOGGLE_DISPLAY("splash","initial");
                    }
                }
                times[alert_index].voice = 1;
            }
        }
        timeleft = Math.floor((maxtime-totaltime)/1000);
        minutes = Math.floor(timeleft/60);
        seconds = Math.floor(timeleft-(minutes*60));
        if (seconds.toString().length < 2) {
            seconds = "0"+seconds;
        }
        document.getElementById("time").innerText = minutes+":"+seconds;
        endtime = Date.now();
        delaydelta = endtime-starttime;
        TIMER = setTimeout(function() { INTERVAL_CHECK(delay,totaltime,times,settings,timeout,endtime); },((delay-delaydelta)-overflow));
    }
    else {
        if (totaltime >= maxtime+15000) {
            console.log(Date.now());
            TOGGLE_DISTRACTION("visible");
            document.getElementById("display").style.border = "2px solid #eaeaea";
            document.getElementById("text").innerText = "Fight Completed";
            document.getElementById("start").disabled = false;
            document.getElementById("time").innerText = "0:00"
        }
        else {
            document.getElementById("time").innerText = "ENRAGE";
            endtime = Date.now();
            delaydelta = endtime-starttime;
            TIMER = setTimeout(function() { INTERVAL_CHECK(delay,totaltime,times,settings,timeout,endtime); },((delay-delaydelta)-overflow));
        }
    }
}
/* Write settings to a cookie */
const WRITE_SETTINGS = () => {
    const expiry = new Date(Date.now()+(365*24*60*60*1000)).toUTCString();
    const valuesettings = ["volume_alert","volume_voice","scannon","wcannon","ncannon","ecannon","cannons1","cannons2"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_5sec","alert_throw","alert_cannons1","alert_cannons2"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    valuesettings.forEach(element => {
        document.cookie = "sabetha_"+element+"="+document.getElementById(element).value+"; expires="+expiry;
    });
    checkedsettings.forEach(element => {
        document.cookie = "sabetha_"+element+"="+document.getElementById(element).checked+"; expires="+expiry;
    });
    selectsettings.forEach(element => {
        document.cookie = "sabetha_"+element+"="+document.getElementById(element).selectedIndex+"; expires="+expiry;
    });
    document.getElementById("cookie_response").innerText = "Saved settings";
    setTimeout(() => {
        document.getElementById("cookie_response").innerHTML = "&nbsp;";
    },4000);
}

/* Read settings from a cookie */
const READ_SETTINGS = () => {
    const valuesettings = ["volume_alert","volume_voice","scannon","wcannon","ncannon","ecannon","cannons1","cannons2"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_5sec","alert_throw","alert_cannons1","alert_cannons2"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    const popups = ["splash"];
    
    let settingsarray = GET_COOKIE();
    
    valuesettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["sabetha_"+element])) {
            document.getElementById(element).value = settingsarray["sabetha_"+element];
        }
    });
    checkedsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["sabetha_"+element])) {
            document.getElementById(element).checked = (settingsarray["sabetha_"+element]=="true"?true:false);
        }
    });
    selectsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["sabetha_"+element])) {
            document.getElementById(element).selectedIndex = settingsarray["sabetha_"+element];
        }
    });
    popups.forEach(element => {
        if (CHECK_EXISTS(settingsarray[element+"_closed"])) {
            TOGGLE_DISPLAY(element,"none");
        }
        else {
            TOGGLE_DISPLAY(element,"");
        }
    });
}

/* Reset settings */
const RESET_SETTINGS = () => {
    const valuesettings = [
        {setting: "volume_alert", value: "3"},
        {setting: "volume_voice", value: "4"},
        {setting: "scannon", value: "Arrow"},
        {setting: "wcannon", value: "Circle"},
        {setting: "ncannon", value: "Heart"},
        {setting: "ecannon", value: "Square"},
        {setting: "cannons1", value: "Cannons 1"},
        {setting: "cannons2", value: "Cannons 2"}
    ];
    const checkedsettings = [
        {setting: "no_distraction", value: true},
        {setting: "lower_prec", value: false},
        {setting: "use_countdown", value: false},
        {setting: "hide_image", value: false},
        {setting: "alert_5sec", value: true},
        {setting: "alert_throw", value: true},
        {setting: "alert_cannons1", value: true},
        {setting: "alert_cannons2", value: true}
    ];
    const selectsettings = [
        {setting: "alert_sound_choice", value: "0"},
        {setting: "voice_sound_choice", value: "0"}
    ];
    valuesettings.forEach(element => {
        document.getElementById(element.setting).value = element.value;
    });
    checkedsettings.forEach(element => {
        document.getElementById(element.setting).checked = element.value;
    });
    selectsettings.forEach(element => {
        document.getElementById(element.setting).selectedIndex = element.value;
    });
    UPDATE_VOL_ALERT();
    HIDE_IMAGE(document.getElementById('hide_image').checked);
}