input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(45)
})
servos.P0.setAngle(90)
loops.everyInterval(randint(3000, 60000), function () {
    servos.P0.setAngle(0)
    basic.pause(500)
    servos.P0.setAngle(45)
    basic.pause(500)
})
