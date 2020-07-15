input.onButtonPressed(Button.A, function () {
    if (a > 0) {
        led.unplot(a, b)
        a += -1
        led.plot(a, b)
    } else if (a == 0) {
        led.unplot(a, b)
        b += -1
        a = 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (a < 4) {
        led.unplot(a, b)
        a += 1
        led.plot(a, b)
    } else if (a == 4) {
        led.unplot(a, b)
        b += 1
        a = -1
    }
})
let b = 0
let a = 0
a = 2
b = 2
led.plot(a, b)
basic.forever(function () {
	
})
