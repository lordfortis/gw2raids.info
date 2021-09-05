<?php
  $app = [
    "target" => "Sabetha",
    "keywords" => [
        "cannon"
    ],
    "totaltime" => "9:00"
  ];

  require("../common/templates/head.php");
  require("../common/templates/header.php");
  require("../common/templates/general.php");
  require("../common/templates/settings.php");
  require("../common/templates/footer.php");
?>
<?php template_license($app); ?>

<html lang="en">

  <?php template_head($app); ?>

  <body onload="ON_LOAD()">
    <?php template_audio($app); ?>

    <?php template_header($app); ?>

    <div id="content" class="page-content">

      <?php template_buttons($app); ?>

      <?php template_timer_display($app); ?>

      <?php template_volume_controls($app); ?>

      <?php template_warning($app); ?>

      <div id="settings" class="main-settings bottom-background">
      
        <?php template_settings_general($app); ?>

        <div id="cannon_settings" class="main-settings-child">
            <div id="cannon_settings_title" class="settings-title">Cannon Settings</div>
            <div id="cannon_settings_content" class="settings-content">
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="scannon">South Cannon</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="scannon" value="Arrow" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="wcannon">West Cannon</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="wcannon" value="Circle" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="ncannon">North Cannon</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="ncannon" value="Heart" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="ecannon">East Cannon</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="ecannon" value="Square" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <hr>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="cannons1">Cannon Runner 1</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="cannons1" value="Cannon 1" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="cannons2">Cannon Runner 2</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="cannons2" value="Cannon 2" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
            </div>
        </div>
        <div id="alert_settings" class="main-settings-child">
            <div id="alert_settings_title" class="settings-title">Alerts</div>
            <div id="alert_settings_content">
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_5sec" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_5sec" title="Calls for running to the pad (5 seconds)">Go to launch pad</label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_throw" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_throw" title="Calls for throwing the bomb and calling the next marker">Throw bomb and rotate</label>
                    </div>
                </div>
                <hr>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_cannons1" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_cannons1" title="Calls for first cannon runner">Cannon Runner 1</label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_cannons2" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_cannons2" title="Calls for second cannon runner">Cannon Runner 2</label>
                    </div>
                </div>
            </div>
        </div>

      </div>
      
      <?php template_cookie_control($app); ?>

    </div>

    <?php template_footer($app); ?>
  </body>
</html>