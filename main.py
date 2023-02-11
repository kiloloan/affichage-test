def afficheLog(texte: str):
    basic.show_icon(IconNames.CHESSBOARD)
    LCD1IN8.draw_rectangle(0,
        115,
        160,
        128,
        LCD1IN8.Get_Color(LCD_COLOR.GREEN),
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.dis_string(1, 116, texte, LCD1IN8.Get_Color(LCD_COLOR.BLACK))
    LCD1IN8.LCD_DisplayWindows(0, 115, 160, 128)
def fond_ecran():
    afficheLog("affiche ligne")
    basic.show_icon(IconNames.STICK_FIGURE)
    for AxeX in range(161):
        LCD1IN8.draw_line(AxeX,
            1,
            160 - AxeX,
            128,
            Math.round(65535 / AxeX),
            DOT_PIXEL.DOT_PIXEL_1,
            LINE_STYLE.LINE_SOLID)
    LCD1IN8.LCD_Display()
    afficheLog("affiche rectangle")
    basic.show_icon(IconNames.STICK_FIGURE)
    for AxeY in range(65):
        LCD1IN8.draw_rectangle(AxeY,
            AxeY,
            AxeY * 2,
            AxeY * 2,
            Math.round(1024 * AxeY),
            DRAW_FILL.DRAW_EMPTY,
            DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.LCD_Display()
    afficheLog("affiche cercle")
    basic.show_icon(IconNames.STICK_FIGURE)
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

def on_button_pressed_a():
    global posX
    basic.show_leds("""
        . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
    """)
    if posX < 160:
        posX += 1
    else:
        posX = 1
    AfficheCurseur()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global poxY
    basic.show_leds("""
        . . . . .
                # # # # #
                . # # # .
                . . # . .
                . . . . .
    """)
    if poxY < 128:
        poxY += 1
    else:
        poxY = 1
    AfficheCurseur()
input.on_button_pressed(Button.B, on_button_pressed_b)

def AfficheCurseur():
    afficheLog("X" + str(posX) + "|Y" + str(poxY))
    LCD1IN8.draw_point(posX, poxY, color, DOT_PIXEL.DOT_PIXEL_2)
    LCD1IN8.LCD_DisplayWindows(posX - 2, poxY - 2, posX + 2, poxY + 2)
color = 0
poxY = 0
posX = 0
basic.show_icon(IconNames.HAPPY)
posX = 1
poxY = 1
color = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
afficheLog("initialisation")
basic.show_icon(IconNames.YES)
fond_ecran()
basic.show_icon(IconNames.NO)

def on_forever():
    global color
    basic.show_icon(IconNames.SQUARE)
    if color <= 65536:
        color += 1
    else:
        color = 0
basic.forever(on_forever)
