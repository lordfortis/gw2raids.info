<?php
  $app = [
    "target" => "Dhuum",
    "keywords" => [
        "greens"
    ],
    "totaltime" => "10:00"
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

        <div id="reaper_settings" class="main-settings-child">
          <div id="reaper_settings_title" class="settings-title">Reaper's Icons</div>
          <label for="reaper1">Reaper 1</label>
          <input type="text" id="reaper1" value="Arrow" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper2">Reaper 2</label>
          <input type="text" id="reaper2" value="Circle" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper3">Reaper 3</label>
          <input type="text" id="reaper3" value="Heart" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper4">Reaper 4</label>
          <input type="text" id="reaper4" value="Square" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper5">Reaper 5</label>
          <input type="text" id="reaper5" value="Star" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper6">Reaper 6</label>
          <input type="text" id="reaper6" value="Spiral" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="reaper7">Reaper 7</label>
          <input type="text" id="reaper7" value="Triangle" onchange="TOGGLE_DISPLAY('warning','initial')">
          <div id="reaper_settings_title" class="settings-title">Green Naming</div>
          <label for="green1">Green 1</label>
          <input type="text" id="green1" value="Green 1" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="green2">Green 2</label>
          <input type="text" id="green2" value="Green 2" onchange="TOGGLE_DISPLAY('warning','initial')"><br />
          <label for="green3">Green 3</label>
          <input type="text" id="green3" value="Green 3" onchange="TOGGLE_DISPLAY('warning','initial')">
        </div>
        <div id="alert_settings" class="main-settings-child">
          <div id="alert_settings_title" class="settings-title">Alerts</div>
          <div id="alert_settings_content" class="settings-content">
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_goto" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_goto" title="Calls for running to a green (10 seconds)">Go to green</label>
                  </div>
              </div>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_goup" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_goup" title="Calls for going up in a green">Go up in green</label>
                  </div>
              </div>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_ldm" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_ldm" title="Calls for Lesser Deathmark (10 second warning + event)">Lesser Deathmark</label>
                  </div>
              </div>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_gdm" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_gdm" title="Calls for Greater Deathmark (10 second warning + event)">Greater Deathmark</label>
                  </div>
              </div>
              <hr>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_g1" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_g1" title="Calls for first orb collector">Green 1</label>
                  </div>
              </div>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_g2" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_g2" title="Calls for second orb collector">Green 2</label>
                  </div>
              </div>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_g3" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_g3" title="Calls for third orb collector">Green 3</label>
                  </div>
              </div>
              <hr>
              <div class="settings-row">
                  <div class="settings-left">
                      <input type="checkbox" id="alert_info" checked>
                  </div>
                  <div class="settings-right">
                      <label for="alert_info" title="General fight events, such as Dhuum standing up">General Info</label>
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