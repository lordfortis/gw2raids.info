<?php function template_header($app) { ?>
    <div id="header" class="centered-text">
        <div id="return" class="menu-return">
            <a href="../../">
                &lt; Return to Menu
            </a>
        </div>
        <div id="title" class="page-title"><?php echo $app['target']; ?> Timer</div>
        <div id="splash" class="splash-box" style="display: none;">
            <div id="close_splash" class="close-splash" onclick="TOGGLE_DISPLAY('splash','none')">X&nbsp;</div>
            <div>You may need to disable pop-up blockers to hear voices.</div>
            <div>At times there may be a second of delay with voice announcements as an external source is used.</div>
        </div>
    </div>
<?php } ?>