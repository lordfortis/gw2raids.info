<?php function template_settings_general($app) { ?>
    <div id="general_settings" class="main-settings-child">
        <div id="general_settings_title" class="settings-title">General Settings</div>
        <label for="alert_sound_choice">Alert Sounds</label><br />
        <select id="alert_sound_choice" class="sound-choice" onChange="UPDATE_ALERT_SOUND()">
            <option value="digi-synth-chime" selected>digi-synth-chime</option>
            <option value="metal-chime">metal-chime</option>
            <option value="electro-chime">electro-chime</option>
            <option value="doorbell-chime">doorbell-chime</option>
            <option value="soft-chime">soft-chime</option>
            <option value="mega-chime">mega-chime</option>
        </select><br /><br />
        <label for="voice_sound_choice">Voices</label><br />
        <select id="voice_sound_choice" class="sound-choice">
            <option value="UK English Female" selected>UK English Female</option>
            <option value="UK English Male">UK English Male</option>
        </select>
        <div class="settings-row extra-footer">
            <div>
                <input type="button" class="settings-small-button" id="test_alert" value="Test Alert" title="Test the alert sound and volume" onclick="TEST_VOL_ALERT()">
            </div>
            <div>
                <input type="button" class="settings-small-button" id="test_voice" value="Test Voice" title="Test the voice and volume" onclick="TEST_VOL_VOICE()">
            </div>
        </div>
        <hr>
        <div class="settings-row">
            <div class="settings-left">
                <input type="checkbox" id="no_distraction" checked>
            </div>
            <div class="settings-right">
                <label for="no_distraction" title="This option will hide the settings and footer sections whenever the timer is running to reduce distraction.">Hide settings during fight</label>
            </div>
        </div>
        <div class="settings-row">
            <div class="settings-left">
                <input type="checkbox" id="lower_prec">
            </div>
            <div class="settings-right">
                <label for="lower_prec" title="Reduces the updates per second in the script.  Reduce resource usage at the cost of update smoothness.">Use low precision timer</label>
            </div>
        </div>
        <div class="settings-row">
            <div class="settings-left">
                <input type="checkbox" id="use_countdown">
            </div>
            <div class="settings-right">
                <label for="use_countdown" title="Use a countdown for the timer - counts from 6, alerting at 4, 2 and 0">Use a countdown</label>
            </div>
        </div>
        <div class="settings-row">
            <div class="settings-left">
                <input type="checkbox" id="hide_image" onclick="HIDE_IMAGE(document.getElementById('hide_image').checked)">
            </div>
            <div class="settings-right">
                <label for="hide_image" title="Hide the background image on the timer page">Hide background image 😢</label>
            </div>
        </div>
    </div>
<?php } ?>