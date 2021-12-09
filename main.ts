basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) > 0) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
