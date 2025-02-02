let Hand = 0
input.onSound(DetectedSound.Loud, function () {
    waiter()
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showString("R")
    } else if (Hand == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
function waiter () {
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
