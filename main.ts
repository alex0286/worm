radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        meow = 1
    }
    if (receivedNumber == 2) {
        meow = 2
    }
    if (receivedNumber == 0) {
        meow = 0
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
let meow = 0
meow = 0
let sound = 0
radio.setGroup(45)
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
        servos.P0.setAngle(105)
        basic.pause(500)
    }
    if (meow == 2) {
        servos.P0.setAngle(105)
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.pause(500)
    }
})
