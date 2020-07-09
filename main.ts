input.onButtonPressed(Button.A, function () {
    if (a > 0) {
        led.unplot(a, 0)
        a += -1
        led.plot(a, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (a < 4) {
        led.unplot(a, 0)
        a += 1
        led.plot(a, 0)
    }
})
let a = 0
a = 2
led.plot(a, 0)
basic.forever(function () {
	
})
