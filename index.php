<?php
    $timers = [
        "sabetha" => [
            "id" => "sabetha_timer",
            "link" => "sabetha",
            "text" => "Sabetha Timer",
            "tested" => true
        ],
        "trio" => [
            "id" => "trio_timer",
            "link" => "trio",
            "text" => "Trio Timer",
            "tested" => true
        ],
        "dhuum" => [
            "id" => "dhuum_timer",
            "link" => "dhuum",
            "text" => "Dhuum Timer",
            "tested" => true
        ]
    ];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Guild Wars 2 Raids</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="dhuum, sabetha, trio, timer, guildwars, guild wars, gw2, raids, greens, cannons, mortar, saboteur">
        <meta name="description" content="Guild Wars 2 Raids Timers">
        <meta name="author" content="Lord Fortis">
        <link rel="stylesheet" href="style/style.css">
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Open+Sans&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="buttons" class="button-container">
        <?php foreach ($timers as $key => $value) { ?>
            <div id="<?php echo $value['id']; ?>" class="link-button">
                <a href="timers/<?php echo $value['link']; ?>">
                    <div>
                        <?php echo $value['text']; ?>
                        <?php if (!$value['tested']) {?>
                            <br />
                            <span class="small-text">Not yet tested - times might be wrong!</span>
                        <?php } ?>
                    </div>
                </a>
            </div>
        <?php } ?>
        </div>
    </body>
</html>