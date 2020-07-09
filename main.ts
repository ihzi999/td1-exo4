input.onButtonPressed(Button.A, function () {
    led.unplot(a, 0)
    a += a - 2
    led.plot(a, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(a, 0)
    a += a + 1
    led.plot(a, 0)
})
let a = 0
a = 0
led.plot(a, 0)
basic.forever(function () {
	
})
