basic.show_icon(IconNames.HAPPY)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
basic.show_icon(IconNames.YES)

def on_forever():
    basic.show_icon(IconNames.NO)
    for AxeX in range(161):
        LCD1IN8.draw_line(AxeX,
            1,
            160 - AxeX,
            128,
            Math.round(65535 / AxeX),
            DOT_PIXEL.DOT_PIXEL_1,
            LINE_STYLE.LINE_SOLID)
    LCD1IN8.LCD_Display()
    for AxeY in range(65):
        LCD1IN8.draw_rectangle(AxeY,
            AxeY,
            AxeY * 2,
            AxeY * 2,
            Math.round(1024 * AxeY),
            DRAW_FILL.DRAW_EMPTY,
            DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_Display()
    for radius in range(33):
        AxeY2 = 0
        LCD1IN8.draw_circle(96,
            64,
            2 * radius,
            32768 + Math.round(1024 * AxeY2),
            DRAW_FILL.DRAW_EMPTY,
            DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_Display()
    basic.show_icon(IconNames.YES)
basic.forever(on_forever)
