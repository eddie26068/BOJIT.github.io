---
title: BluePill Macro Keypad
date: "17-08-2019"
published: true

tile:
  type: image
  image: /tiles/2019-08-17-Macro_Pad.PNG
---

<script>
    import CopyButton from "@bojit/svelte-components/widgets/CodeEditor/CopyButton.svelte";

    import "prismjs/prism.js";
    import "prismjs/components/prism-c.js";
</script>

Lately I've been doing a lot of playing about with those STM32 'BluePill' boards that are all over *Aliexpress* and *eBay*. Their 32-bit processor packs a lot more punch than the ATMega328p that is at the heart of the Arduino Nano that had been my previous go-to board for various projects. They are also so unbelievably cheap (as low as £1.50 each from China) that I try to maintain a stock of at least 10 at all times.
The other big advantage of the STM32F103 chips is that unlike the ATMega328p they have a built-in USB controller which can support OTG and HID. This makes the boards very handy for making quick and dirty USB devices. In particular, there is a library published by [arpruss](https://github.com/arpruss/USBComposite_stm32f1) which makes it really easy to create 'composite USB' devices (devices that have multiple endpoints/services supported over the same connection). The library currently supports:

- USB HID (keyboards, mice, joysticks, etc...)
- MIDI over USB
- XBox360 Controller Emulation
- USB storage
- USB audio
- Standard USB Serial

The best part is that you can make a device with any combination of these attributes (within the limits of the library/hardware), so you can for example have a USB MIDI device, but simultaneously have a USB Serial connection for debugging.

![Macro_Pad-Bluepill.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Macro_Pad-Bluepill.JPG)

I had plenty of these boards laying about, and as I was ordering some PCBs for another project at the time, I decided to quickly throw together a macro keypad and tag the PCB onto my order. The final result is pictured below: This one was made for a friend who does a lot of video editing (anyone who has used DaVinci Resolve probably recognises the symbols). The design is about as simple as it gets - the PCB is the frame, and the only components required are the BluePill, the switches and a single resistor. It doesn't have all the bells and whistles of a commercial macro-pad, but if you are ordering PCBs anyway and don't count any extra shipping, the BOM of this little macro pad is less than £5. Needless to say, I didn't use genuine Cherry MX Browns!

![Macro_Pad-Macro_Pad.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Macro_Pad-Macro_Pad.JPG)

The PCB design for the macro keypad is very simple. As the STM32 has internal pullups/pulldowns it is simply a matter of placing the keys in a grid and routing the keys to the inputs of the BluePill. The only other detail required is an 18k resistor pulling the *USB D+* line up to 3.3V. This is to correct for a hardware bug that all BluePills seem to have (see [this article](http://amitesh-singh.github.io/stm32/2017/05/27/Overcoming-wrong-pullup-in-blue-pill.html) for more details).
One thing to note with the layout pictured below is that it is designed to have the STM32 soldered in with the pins on the top side. This makes the design lower profile, and also protects the micro-USB connector. However to get this to fit flush to the PCB the yellow ```BOOT``` jumpers have to be desoldered and bridged.
It is also always worth reinforcing the solder joints that attach the USB connector shield/chassis, as they are generally quite weedy and prone to breaking.

![Macro_Pad-PCB.PNG]({import.meta.env.VITE_IMAGE_BASE}/posts/Macro_Pad-PCB.PNG)

The source code for this macro-pad is on [GitHub](https://github.com/BOJIT/Blue-Pill-Macro-Pad), and to simplify things as much as possible, the keycodes are hard-coded into the source. This does mean that to change the macros you do need to reprogram the BluePill, but for my use cases I don't forsee myself needing to change the macros very often.

To simplify things when editing the keyboard layout, the HID keycodes are defined globally in a set of arrays as follows:

<CopyButton />

```c
int KeyMap[12] =            {KeyL1,    KeyL2,    KeyL3,    ...}
uint8_t KeyCodes[12] =      {50,       91,       99,       ...}
uint8_t KeyMod1[12] =       {SHIFTKEY, SHIFTKEY, CTRLKEY,  ...}
uint8_t KeyMod2[12] =       {0,        0,        SHIFTKEY, ...}
```

It is worth noting that the code for my macro keypad treats key 12 as a 'shift'  key, which allows users to double up the functionality of the keys. These secondary functions are set using the ```AltKeyCodes``` section of the global declarations.

This is by no means a particularly advanced or great macro keypad, but they are very cheap and simple to make, and a fun thing to tag on to the end of a PCB order to save on postage. They also make great gifts! I have a few *HC-05*s in the post, and once they arrive I may try and make these into a Bluetooth macro keypad at some point. If you are interested in doing something like that I would highly recommend checking out [this article](https://mitxela.com/projects/bluetooth_hid_gamepad) by **Mitxela** (and the rest of his website too, while you're at it!)

![Macro_Pad-Boxed.JPG]({import.meta.env.VITE_IMAGE_BASE}/posts/Macro_Pad-Boxed.JPG)
