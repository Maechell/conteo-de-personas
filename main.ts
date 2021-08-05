input.onButtonPressed(Button.A, function () {
    PERSONAS += 1
})
input.onButtonPressed(Button.AB, function () {
    PERSONAS = 0
})
input.onButtonPressed(Button.B, function () {
    if (PERSONAS > 0) {
        PERSONAS += -1
    }
})
let PERSONAS = 0
let Establecer_personas = PERSONAS
basic.forever(function () {
    basic.showNumber(PERSONAS)
})
