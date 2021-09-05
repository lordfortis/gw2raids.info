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
        reapers: [
            (document.getElementById("reaper1").value?document.getElementById("reaper1").value:"location"),
            (document.getElementById("reaper2").value?document.getElementById("reaper2").value:"location"),
            (document.getElementById("reaper3").value?document.getElementById("reaper3").value:"location"),
            (document.getElementById("reaper4").value?document.getElementById("reaper4").value:"location"),
            (document.getElementById("reaper5").value?document.getElementById("reaper5").value:"location"),
            (document.getElementById("reaper6").value?document.getElementById("reaper6").value:"location"),
            (document.getElementById("reaper7").value?document.getElementById("reaper7").value:"location")
        ],
        greens: [
            document.getElementById("green1").value,
            document.getElementById("green2").value,
            document.getElementById("green3").value
        ],
        personalerts: [
            document.getElementById("alert_g1").checked,
            document.getElementById("alert_g2").checked,
            document.getElementById("alert_g3").checked
        ],
        alerts: {
            alert_goto: document.getElementById("alert_goto").checked,
            alert_goup: document.getElementById("alert_goup").checked,
            alert_ldm: document.getElementById("alert_ldm").checked,
            alert_gdm: document.getElementById("alert_gdm").checked,
            alert_info: document.getElementById("alert_info").checked
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
    totaltime+=(delay+overflow);
    if (overflow < 0) {
        overflow = 0;
    }
    let maxtime = 600000;
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
                    case 'goto':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_goto)) {
                            text2show = settings.greens[times[alert_index].person-1]+" to "+settings.reapers[times[alert_index].target-1];
                        }
                    break;
                    case 'goup':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_goup)) {
                            text2show = settings.greens[times[alert_index].person-1]+" going up";
                        }
                    break;
                    case 'gdmwarn':
                        if (settings.alerts.alert_gdm) {
                            text2show = "Greater Deathmark in 10";
                        }
                    break;
                    case 'gdm':
                        if (settings.alerts.alert_gdm) {
                            text2show = "Greater Deathmark";
                        }
                    break;
                    case 'ldmwarn':
                        if (settings.alerts.alert_ldm) {
                            text2show = "Lesser Deathmark in 10";
                        }
                    break;
                    case 'ldm':
                        if (settings.alerts.alert_ldm) {
                            text2show = "Lesser Deathmark";
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
                    case 'goto':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_goto)) {
                            text2speak = settings.greens[times[alert_index].person-1]+" to "+settings.reapers[times[alert_index].target-1];
                        }
                    break;
                    case 'goup':
                        if ((settings.personalerts[times[alert_index].person-1]) && (settings.alerts.alert_goup)) {
                            text2speak = settings.greens[times[alert_index].person-1]+" going up";
                        }
                    break;
                    case 'gdmwarn':
                        if (settings.alerts.alert_gdm) {
                            text2speak = "Greater Deathmark in 10";
                        }
                    break;
                    case 'gdm':
                        if (settings.alerts.alert_gdm) {
                            text2speak = "Greater Deathmark";
                        }
                    break;
                    case 'ldmwarn':
                        if (settings.alerts.alert_ldm) {
                            text2speak = "Lesser Deathmark in 10";
                        }
                    break;
                    case 'ldm':
                        if (settings.alerts.alert_ldm) {
                            text2speak = "Lesser Deathmark";
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
        timeleft = Math.floor((600000-totaltime)/1000);
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
        if (totaltime >= maxtime+10000) {
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
    const valuesettings = ["volume_alert","volume_voice","green1","green2","green3","reaper1","reaper2","reaper3","reaper4","reaper5","reaper6","reaper7"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_goto","alert_goup","alert_ldm","alert_gdm","alert_g1","alert_g2","alert_g3","alert_info"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    valuesettings.forEach(element => {
        document.cookie = "dhuum_"+element+"="+document.getElementById(element).value+"; expires="+expiry;
    });
    checkedsettings.forEach(element => {
        document.cookie = "dhuum_"+element+"="+document.getElementById(element).checked+"; expires="+expiry;
    });
    selectsettings.forEach(element => {
        document.cookie = "dhuum_"+element+"="+document.getElementById(element).selectedIndex+"; expires="+expiry;
    });
    document.getElementById("cookie_response").innerText = "Saved settings";
    setTimeout(() => {
        document.getElementById("cookie_response").innerHTML = "&nbsp;";
    },4000);
}

/* Read settings from a cookie */
const READ_SETTINGS = () => {
    const valuesettings = ["volume_alert","volume_voice","green1","green2","green3","reaper1","reaper2","reaper3","reaper4","reaper5","reaper6","reaper7"];
    const checkedsettings = ["no_distraction","lower_prec","use_countdown","hide_image","alert_goto","alert_goup","alert_ldm","alert_gdm","alert_g1","alert_g2","alert_g3","alert_info"];
    const selectsettings = ["alert_sound_choice","voice_sound_choice"];
    const popups = ["splash"];
    
    let settingsarray = GET_COOKIE();
    
    valuesettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["dhuum_"+element])) {
            document.getElementById(element).value = settingsarray["dhuum_"+element];
        }
    });
    checkedsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["dhuum_"+element])) {
            document.getElementById(element).checked = (settingsarray["dhuum_"+element]=="true"?true:false);
        }
    });
    selectsettings.forEach(element => {
        if (CHECK_EXISTS(settingsarray["dhuum_"+element])) {
            document.getElementById(element).selectedIndex = settingsarray["dhuum_"+element];
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
        {setting: "green1", value: "Green 1"},
        {setting: "green2", value: "Green 2"},
        {setting: "green3", value: "Green 3"},
        {setting: "reaper1", value: "Arrow"},
        {setting: "reaper2", value: "Circle"},
        {setting: "reaper3", value: "Heart"},
        {setting: "reaper4", value: "Square"},
        {setting: "reaper5", value: "Star"},
        {setting: "reaper6", value: "Spiral"},
        {setting: "reaper7", value: "Triangle"}
    ];
    const checkedsettings = [
        {setting: "no_distraction", value: true},
        {setting: "lower_prec", value: false},
        {setting: "use_countdown", value: false},
        {setting: "hide_image", value: false},
        {setting: "alert_goto", value: true},
        {setting: "alert_goup", value: true},
        {setting: "alert_ldm", value: true},
        {setting: "alert_gdm", value: true},
        {setting: "alert_g1", value: true},
        {setting: "alert_g2", value: true},
        {setting: "alert_g3", value: true},
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