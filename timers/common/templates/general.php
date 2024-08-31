<?php function template_audio($app) { ?>
    <audio id="alert_sound">
        <source id="alert_sound_src" src="../common/sounds/digi-synth-chime.mp3" />
    </audio>
<?php } ?>

<?php function template_buttons($app) { ?>
    <div id="buttons" class="timer-buttons">
        <input type="button" id="start" onClick="START_COUNTDOWN()" value="Start">
        <input type="button" id="reset" onClick="STOP_TIMER('<?php echo $app['totaltime']; ?>')" value="Reset">
    </div>
<?php } ?>

<?php function template_timer_display($app) { ?>
    <div id="display" class="timer-display top-background">
        <div id="time" class="timer-time"><?php echo $app['totaltime']; ?></div>
        <hr>
        <div id="text" class="timer-text">...Waiting...</div>
    </div>
<?php } ?>

<?php function template_volume_controls($app) { ?>
    <div id="volume" class="volume-controls">
        <div id="alert_control" class="volume-control-box small-centered-box">
            <div id="alert_title" class="small-centered-box">Alert Volume</div>
            <input type="range" min="0" max="10" value="3" id="volume_alert" oninput="UPDATE_VOL_ALERT()">
            <div id="alert_status" class="volume-status small-centered-box"></div>
        </div>
        <div>
            <input type="button" class="control-small-button" id="jump_back_1" value="<" title="Jump back 1 second&#10;&#13;WARNING: This may cause alerts not to trigger, only use at the start." onclick="ADJUST_OFFSET(-1000)">
        </div>
        <div>
            <span id="timer_offset" class="control-offset">0</span>
            <input type="button" class="control-small-button" id="jump_forward_1" value=">" title="Jump forward 1 second&#10;&#13;WARNING: This may cause alerts not to trigger, only use at the start." onclick="ADJUST_OFFSET(1000)">
        </div>
        <div>
            <input type="button" class="control-small-button" id="jump_forward_5" value=">>" title="Jump forward 5 second&#10;&#13;WARNING: This may cause alerts not to trigger, only use at the start." onclick="ADJUST_OFFSET(5000)">
        </div>
        <div id="voice_control" class="volume-control-box small-centered-box">
            <div id="voice_title" class="small-centered-box">Voice Volume</div>
            <input type="range" min="0" max="10" value="4" id="volume_voice" oninput="UPDATE_VOL_VOICE()">
            <div id="voice_status" class="volume-status small-centered-box"></div>
        </div>
    </div>
<?php } ?>

<?php function template_warning($app) { ?>
    <div id="warning" class="splash-box" style="display: none;">
        <div id="hide_warning" class="close-splash" onclick="TOGGLE_DISPLAY('warning','none')">X&nbsp;</div>
        <div>Adjusting the names in the settings may cause delay in the voice announcements.</div>
        <div>It is recommended to run the timer through once before the fight after changing the names, to try and avoid this.</div>
    </div>
<?php } ?>

<?php function template_cookie_control($app) { ?>
    <div id="cookie_control" class="cookie-control">
        <input type="button" value="Save" onclick="WRITE_SETTINGS()" title="Save settings to a cookie">
        <input type="button" value="Reset" onclick="RESET_SETTINGS()" title="Reset settings to default">
        <div id="cookie_response" class="cookie-response">&nbsp;</div>
    </div>
<?php } ?>