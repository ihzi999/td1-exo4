input.onButtonPressed(Button.A, function () {
    if (a > 0) {
        led.unplot(a, b)
        a += -1
        led.plot(a, b)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (a < 4) {
        led.unplot(a, b)
        a += 1
        led.plot(a, b)
    }
})
let b = 0
let a = 0
a = 2
b = 0
led.plot(a, 0)
basic.forever(function () {
	
})
