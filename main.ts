let Ring = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
Ring.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
let position = 0
Ring.show()
basic.forever(function () {
    if (position < 11) {
        Ring.rotate(1)
        position = position + 0
    } else {
        Ring.clear()
        Ring.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        position = 0
        Ring.show()
    }
    basic.pause(100)
})
