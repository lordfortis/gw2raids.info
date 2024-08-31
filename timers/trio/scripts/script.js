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
        boss: {
            Berg: (document.getElementById("berg").value?document.getElementById("berg").value:"location"),
            Zane: (document.getElementById("zane").value?document.getElementById("zane").value:"location"),
            Narella: (document.getElementById("narella").value?document.getElementById("narella").value:"location")
        },
        alerts: {
            alert_bosswarn: document.getElementById("alert_bosswarn").checked,
            alert_boss: document.getElementById("alert_boss").checked,
            alert_saboteur: document.getElementById("alert_saboteur").checked,
            alert_mortars: document.getElementById("alert_mortars").checked
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
                    case 'bosswarn':
                        if (settings.alerts.alert_bosswarn) {
                            text2show = times[alert_index].boss+" will spawn in 10 seconds at "+settings.boss[times[alert_index].boss];
                        }
                    break;
                    case 'boss':
                        if (settings.alerts.alert_boss) {
                            text2show = times[alert_index].boss+" spawning at "+settings.boss[times[alert_index].boss];
                        }
                    break;
                    case 'saboteur':
                        if (settings.alerts.alert_saboteur) {
                            text2show = "Saboteur entering camp from "+times[alert_index].direction+" gate";
                        }
                    break;
                    case 'mortar':
                        if (settings.alerts.alert_mortars) {
                            text2show = "Go to mortars "+times[alert_index].location;
                        }
                    break;
                    case 'info':
                        if (settings.alerts.alert_info) {
                            text2show = times[alert_index].text;
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
                    case 'bosswarn':
                        if (settings.alerts.alert_bosswarn) {
                            text2speak = times[alert_index].boss+" will spawn in 10 seconds at "+settings.boss[times[alert_index].boss];
                        }
                    break;
                    case 'boss':
                        if (settings.alerts.alert_boss) {
                            text2speak = times[alert_index].boss+" spawning at "+settings.boss[times[alert_index].boss];
                        }
                    break;
                    case 'saboteur':
                        if (settings.alerts.alert_saboteur) {
                            text2speak = "Saboteur entering camp from "+times[alert_index].direction+" gate";
                        }
                    break;
                    case 'mortar':
                        if (settings.alerts.alert_mortars) {
                            text2speak = "Go to mortars "+times[alert_index].location;
                        }
                    break;
                    case 'info':
                        if (settings.alerts.alert_info) {
                            text2speak = times[alert_index].text;
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
        console.log(Date.now());
        TOGGLE_DISTRACTION("visible");
        document.getElementById("display").style.border = "2px solid #eaeaea";
        document.getElementById("text").innerText = "Fight Completed";
        document.getElementById("start").disabled = false;
        document.getElementById("time").innerText = "0:00"
    }
}
/* Write settings to a cookie */
const WRITE_SETTINGS = () => {
    const expiry = new Date(Date.now()+(365*24*60*60*1000)).toUTCString();
    const valuesettings = ["volume_alert","volume_voice","berg","zane","narella"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_bosswarn","alert_boss","alert_saboteur","alert_mortars","alert_info"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    valuesettings.forEach(element => {
        document.cookie = "trio_"+element+"="+document.getElementById(element).value+"; expires="+expiry;
    });
    checkedsettings.forEach(element => {
        document.cookie = "trio_"+element+"="+document.getElementById(element).checked+"; expires="+expiry;
    });
    selectsettings.forEach(element => {
        document.cookie = "trio_"+element+"="+document.getElementById(element).selectedIndex+"; expires="+expiry;
    });
    document.getElementById("cookie_response").innerText = "Saved settings";
    setTimeout(() => {
        document.getElementById("cookie_response").innerHTML = "&nbsp;";
    },4000);
}

/* Read settings from a cookie */
const READ_SETTINGS = () => {
    const valuesettings = ["volume_alert","volume_voice","berg","zane","narella"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_bosswarn","alert_boss","alert_saboteur","alert_mortars","alert_info"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    const popups = ["splash"];
    
    let settingsarray = GET_COOKIE();
    
    valuesettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["trio_"+element])) {
            document.getElementById(element).value = settingsarray["trio_"+element];
        }
    });
    checkedsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["trio_"+element])) {
            document.getElementById(element).checked = (settingsarray["trio_"+element]=="true"?true:false);
        }
    });
    selectsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["trio_"+element])) {
            document.getElementById(element).selectedIndex = settingsarray["trio_"+element];
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
        {setting: "berg", value: "Arrow"},
        {setting: "zane", value: "Circle"},
        {setting: "narella", value: "Heart"}
    ];
    const checkedsettings = [
        {setting: "no_distraction", value: true},
        {setting: "lower_prec", value: false},
        {setting: "use_countdown", value: false},
        {setting: "hide_image", value: false},
        {setting: "alert_bosswarn", value: true},
        {setting: "alert_boss", value: true},
        {setting: "alert_saboteur", value: true},
        {setting: "alert_mortars", value: true},
        {setting: "alert_info", value: true}
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