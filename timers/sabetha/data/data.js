const originaltimes = [
    {
        time: 0,
        text: "Starting..."
    },
    {
        time: 29,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Arrow",
        target: 1
    },
    {
        time: 34,
        type: "throw",
        person: 1,
        text: "Throw to Arrow",
        target: 1,
        nexttarget: 2
    },
    {
        time: 59,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Circle",
        target: 2
    },
    {
        time: 64,
        type: "throw",
        person: 2,
        text: "Throw to Circle",
        target: 2,
        nexttarget: 3
    },
    {
        time: 89,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Heart",
        target: 3
    },
    {
        time: 94,
        type: "throw",
        person: 1,
        text: "Throw to Heart",
        target: 3,
        nexttarget:4
    },
    {
        time: 119,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Square",
        target: 4
    },
    {
        time: 124,
        type: "throw",
        person: 2,
        text: "Throw to Square",
        target: 4,
        nexttarget: 1
    },
    {
        time: 149,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Arrow",
        target: 1
    },
    {
        time: 154,
        type: "throw",
        person: 1,
        text: "Throw to Arrow",
        target: 1,
        nexttarget: 3
    },
    {
        time: 179,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Heart",
        target: 3
    },
    {
        time: 184,
        type: "throw",
        person: 2,
        text: "Throw to Heart",
        target: 3,
        nexttarget: 2
    },
    {
        time: 209,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Circle",
        target: 2
    },
    {
        time: 214,
        type: "throw",
        person: 1,
        text: "Throw to Circle",
        target: 2,
        nexttarget: 4
    },
    {
        time: 239,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Square",
        target: 4
    },
    {
        time: 244,
        type: "throw",
        person: 2,
        text: "Throw to Square",
        target: 4,
        nexttarget: 1
    },
    {
        time: 269,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Arrow",
        target: 1
    },
    {
        time: 274,
        type: "throw",
        person: 1,
        text: "Throw to Arrow",
        target: 1,
        nexttarget: 2
    },
    {
        time: 299,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Circle",
        target: 2
    },
    {
        time: 304,
        type: "throw",
        person: 2,
        text: "Throw to Circle",
        target: 2,
        nexttarget: 3
    },
    {
        time: 329,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Heart",
        target: 3
    },
    {
        time: 334,
        type: "throw",
        person: 1,
        text: "Throw to Heart",
        target: 3,
        nexttarget: 4
    },
    {
        time: 359,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Square",
        target: 4
    },
    {
        time: 364,
        type: "throw",
        person: 2,
        text: "Throw to Square",
        target: 4,
        nexttarget: 1
    },
    {
        time: 389,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Arrow",
        target: 1
    },
    {
        time: 394,
        type: "throw",
        person: 1,
        text: "Throw to Arrow",
        target: 1,
        nexttarget: 3
    },
    {
        time: 419,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Heart",
        target: 3
    },
    {
        time: 424,
        type: "throw",
        person: 2,
        text: "Throw to Heart",
        target: 3,
        nexttarget: 2
    },
    {
        time: 449,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Circle",
        target: 2
    },
    {
        time: 454,
        type: "throw",
        person: 1,
        text: "Throw to Circle",
        target: 2,
        nexttarget: 4
    },
    {
        time: 479,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Square",
        target: 4
    },
    {
        time: 484,
        type: "throw",
        person: 2,
        text: "Throw to Square",
        target: 4,
        nexttarget: 1
    },
    {
        time: 509,
        type: "5sec",
        person: 1,
        text: "Cannon 1 to Arrow",
        target: 1
    },
    {
        time: 514,
        type: "throw",
        person: 1,
        text: "Throw to Arrow",
        target: 1,
        nexttarget: 2
    },
    {
        time: 539,
        type: "5sec",
        person: 2,
        text: "Cannon 2 to Circle",
        target: 2
    }
];