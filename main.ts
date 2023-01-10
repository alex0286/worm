let meow = 0
input.onButtonPressed(Button.A, function () {
    meow = 1
})
input.onButtonPressed(Button.AB, function () {
    meow = 2
})
input.onButtonPressed(Button.B, function () {
    meow = 0
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    if (meow == 1) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
    if (meow == 2) {
        servos.P0.setAngle(180)
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.pause(500)
    }
    if (input.isGesture(Gesture.Shake)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            . # . # .
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
