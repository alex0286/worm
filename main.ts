input.onButtonPressed(Button.A, function () {
    meow = 1
})
input.onSound(DetectedSound.Loud, function () {
    sound = input.soundLevel()
    if (sound > 100) {
        meow += 1
        if (meow == 2) {
            meow = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    meow = 2
})
input.onButtonPressed(Button.B, function () {
    meow = 0
})
let sound = 0
let meow = 0
meow = 0
sound = 0
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
})
