<?php
  $app = [
    "target" => "Trio",
    "keywords" => [
        "mortar",
        "saboteur"
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

        <div id="boss_settings" class="main-settings-child">
            <div id="boss_settings_title" class="settings-title">Boss Settings</div>
            <div id="boss_settings_content" class="settings-content">
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="berg">Berg</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="berg" value="Arrow" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="zane">Zane</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="zane" value="Circle" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-long-left">
                        <label for="narella">Narella</label>
                    </div>
                    <div class="settings-right">
                        <input type="text" id="narella" value="Heart" onchange="TOGGLE_DISPLAY('warning','initial')">
                    </div>
                </div>
            </div>
        </div>
        <div id="alert_settings" class="main-settings-child">
            <div id="alert_settings_title" class="settings-title">Alerts</div>
            <div id="alert_settings_content" class="settings-content">
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_bosswarn" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_bosswarn" title="Calls for moving to boss spawns (10 seconds)">Go to boss spawn</label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_boss" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_boss" title="Calls for boss spawns">Boss spawns</label>
                    </div>
                </div>
                <hr>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_saboteur" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_saboteur" title="Calls for saboteurs (5 seconds away)">Sabotuer enters camp</label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_mortars" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_mortars" title="Calls for mortar player to leave the group">Go to mortars</label>
                    </div>
                </div>
                <hr>
                <div class="settings-row">
                    <div class="settings-left">
                        <input type="checkbox" id="alert_info" checked>
                    </div>
                    <div class="settings-right">
                        <label for="alert_info" title="Calls for general info like sniper respawn (this is an estimate only)">General Info</label>
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