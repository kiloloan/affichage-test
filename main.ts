function afficheLog (texte: string) {
    LCD1IN8.DrawRectangle(
    0,
    115,
    160,
    128,
    LCD1IN8.Get_Color(LCD_COLOR.GREEN),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DisString(
    1,
    116,
    texte,
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    LCD1IN8.LCD_DisplayWindows(
    0,
    115,
    160,
    128
    )
}
basic.showIcon(IconNames.Happy)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
afficheLog("initialisation")
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showIcon(IconNames.No)
    afficheLog("affiche ligne")
    for (let AxeX = 0; AxeX <= 160; AxeX++) {
        LCD1IN8.DrawLine(
        AxeX,
        1,
        160 - AxeX,
        128,
        Math.round(65535 / AxeX),
        DOT_PIXEL.DOT_PIXEL_1,
        LINE_STYLE.LINE_SOLID
        )
    }
    LCD1IN8.LCD_Display()
    afficheLog("affiche rectangle")
    for (let AxeY = 0; AxeY <= 64; AxeY++) {
        LCD1IN8.DrawRectangle(
        AxeY,
        AxeY,
        AxeY * 2,
        AxeY * 2,
        Math.round(1024 * AxeY),
        DRAW_FILL.DRAW_EMPTY,
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
    LCD1IN8.LCD_Display()
    afficheLog("affiche cercle")
    for (let radius = 0; radius <= 32; radius++) {
        let AxeY = 0
        LCD1IN8.DrawCircle(
        96,
        64,
        2 * radius,
        32768 + Math.round(1024 * AxeY),
        DRAW_FILL.DRAW_EMPTY,
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
    LCD1IN8.LCD_Display()
    basic.showIcon(IconNames.Yes)
})
