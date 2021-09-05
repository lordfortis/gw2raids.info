const originaltimes = [
    {
        time: 0,
        text: "Starting..."
    },
    {
        time: 20,
        type: "goto",
        person: 1,
        text: "Green 1 to Arrow",
        target: 1
    },
    {
        time: 30,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 50,
        type: "goto",
        person: 2,
        text: "Green 2 to Circle",
        target: 2
    },
    {
        time: 60,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 80,
        type: "goto",
        person: 3,
        text: "Green 3 to Heart",
        target: 3
    },
    {
        time: 90,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 110,
        type: "goto",
        person: 1,
        text: "Green 1 to Square",
        target: 4
    },
    {
        time: 115,
        type: "info",
        text: "Boss stands in 5",
    },
    {
        time: 120,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 140,
        type: "goto",
        person: 2,
        text: "Green 2 to Star",
        target: 5
    },
    {
        time: 150,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 165,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 170,
        type: "goto",
        person: 3,
        text: "Green 3 to Spiral",
        target: 6
    },
    {
        time: 174,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 180,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 200,
        type: "goto",
        person: 1,
        text: "Green 1 to Triangle",
        target: 7
    },
    {
        time: 205,
        type: "gdmwarn",
        text: "Greater Deathmark in 10"
    },
    {
        time: 210,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 214,
        type: "gdm",
        text: "Greater Deathmark"
    },
    {
        time: 230,
        type: "goto",
        person: 2,
        text: "Green 2 to Arrow",
        target: 1
    },
    {
        time: 240,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 245,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 254,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 260,
        type: "goto",
        person: 3,
        text: "Green 3 to Circle",
        target: 2
    },
    {
        time: 270,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 285,
        type: "gdmwarn",
        text: "Greater Deathmark in 10"
    },
    {
        time: 290,
        type: "goto",
        person: 1,
        text: "Green 1 to Heart",
        target: 3
    },
    {
        time: 294,
        type: "gdm",
        text: "Greater Deathmark"
    },
    {
        time: 300,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 320,
        type: "goto",
        person: 2,
        text: "Green 2 to Square",
        target: 4
    },
    {
        time: 325,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 330,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 334,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 350,
        type: "goto",
        person: 3,
        text: "Green 3 to Star",
        target: 5
    },
    {
        time: 360,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 365,
        type: "gdmwarn",
        text: "Greater Deathmark in 10"
    },
    {
        time: 374,
        type: "gdm",
        text: "Greater Deathmark"
    },
    {
        time: 380,
        type: "goto",
        person: 1,
        text: "Green 1 to Spiral",
        target: 6
    },
    {
        time: 390,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 405,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 410,
        type: "goto",
        person: 2,
        text: "Green 2 to Triangle",
        target: 7
    },
    {
        time: 414,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 420,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 440,
        type: "goto",
        person: 3,
        text: "Green 3 to Arrow",
        target: 1
    },
    {
        time: 445,
        type: "gdmwarn",
        text: "Greater Deathmark in 10"
    },
    {
        time: 450,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 454,
        type: "gdm",
        text: "Greater Deathmark"
    },
    {
        time: 470,
        type: "goto",
        person: 1,
        text: "Green 1 to Circle",
        target: 2
    },
    {
        time: 480,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 485,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 494,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 500,
        type: "goto",
        person: 2,
        text: "Green 2 to Heart",
        target: 3
    },
    {
        time: 510,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    },
    {
        time: 525,
        type: "gdmwarn",
        text: "Greater Deathmark in 10"
    },
    {
        time: 530,
        type: "goto",
        person: 3,
        text: "Green 3 to Square",
        target: 4
    },
    {
        time: 534,
        type: "gdm",
        text: "Greater Deathmark"
    },
    {
        time: 540,
        type: "goup",
        person: 3,
        text: "Green 3 going up"
    },
    {
        time: 560,
        type: "goto",
        person: 1,
        text: "Green 1 to Star",
        target: 5
    },
    {
        time: 565,
        type: "ldmwarn",
        text: "Lesser Deathmark in 10"
    },
    {
        time: 570,
        type: "goup",
        person: 1,
        text: "Green 1 going up"
    },
    {
        time: 574,
        type: "ldm",
        text: "Lesser Deathmark"
    },
    {
        time: 590,
        type: "goto",
        person: 2,
        text: "Green 2 to Spiral",
        target: 6
    },
    {
        time: 599,
        type: "goup",
        person: 2,
        text: "Green 2 going up"
    }
];