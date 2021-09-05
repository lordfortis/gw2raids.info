<?php function template_license($app) { ?>
    <!DOCTYPE html>
    <!--
        <?php echo $app['target']; ?> Timer
        Copyright (C) 2021 Lord Fortis.1452

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.
    -->
<?php } ?>
<?php function template_head($app) { ?>
    <head>
        <title><?php echo $app['target']; ?> Timer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="<?php echo $app['target']; ?>, timer, guildwars, guild wars, gw2<?php foreach ($app['keywords'] as $value) { echo ", ".$value; } ?>">
        <meta name="description" content="Guild Wars 2 <?php echo $app['target']; ?> Timer">
        <meta name="author" content="Lord Fortis">
        <link rel="icon" href="/favicon.ico">
        <link rel="stylesheet" href="../common/styles/style.css">
        <link rel="stylesheet" href="../common/styles/mobile-style.css">
        <!-- Shared functions -->
        <script src="../common/scripts/common.js"></script>
        <!-- Encounter specific functions -->
        <script src="scripts/script.js"></script>
        <!-- Encounter data -->
        <script src="data/data.js"></script>
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Open+Sans&display=swap" rel="stylesheet">
        <!-- Voice Announcements -->
        <script src="https://code.responsivevoice.org/responsivevoice.js?key=sT4C6KPw"></script>
    </head>
<?php } ?>