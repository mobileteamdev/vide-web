module.exports = styleGuideVTHO

function styleGuideVTHO () {
  /* --------------------------------------------------------------------------

                              CSS PROPERTIES

  -------------------------------------------------------------------------- */
  var cssProperties = {
    /* ------------------------------------------------------
                              COLORS
    ------------------------------------------------------ */
    colors: {
      // BASIC COLORS (B&W and transparent)
      transparent: 'transparent',
      white: 'hsla(198, 100%, 97%, 1)',
      black: 'hsla(240, 100%, 6%, 1)',
      opacityBlack: 'hsla(240, 100%, 6%, .7)',

      // BLUE
      blue: 'hsla(233, 91%, 36%, 1)',
      lightBlue: 'hsla(202, 91%, 75%, 1)',
      blueLightTrans: 'hsla(202, 91%, 75%, .4)',
      backgroundBlue: 'hsla(240, 100%, 21%, 1)',
      brightBlue: 'hsla(233, 91%, 58%, 1)',
      blueGreyEve: 'hsla(213, 64%, 65%, 1)',
      bluePruneEve: 'hsla(232, 30%, 20%, 1)',
      blueBerrySmog: 'hsla(286, 15%, 22%, 1)',
      blueBlur: 'hsla(232, 30%, 20%, 0.7)',
      blueMascara: 'hsla(187, 100%, 51%, 1)',
      blueMorningGlory: 'hsla(213, 74%, 80%, 1)',
      blueFairyDust: 'hsla(181, 83%, 86%, 1)',
      blueMonday: 'hsla(213, 100%, 16%, 1)',

      // GREY
      grey: 'hsla(0, 0%, 40%, 1)',
      lightGrey: 'hsla(0, 0%, 40%, .5)',
      veryLightGrey: 'hsla(0, 0%, 40%, .2)',

      blueGrey: 'hsla(206, 24%, 58%, .8)',
      greyBlueNight: 'hsla(215, 55%, 18%, 1)',
      greyBlueLight: 'hsla(213, 15%, 58%, 1)',
      greyBlueMed: 'hsla(215, 55%, 28%, 1)',

      desatGrey: 'hsla(173, 17%, 79%, 1)',
      // RED
      strongRed: '#ff0042',
      red: '#eb2256',
      lightRed: '#f95882',
      // GREEN
      green: '#2cbb69',
      lightGreen: '#75dba0',
      greenZing: '#06f96e',
      // PINK
      pink: 'hsla(300, 69%, 76%, 1)',
      lightPink: 'hsla(286, 71%, 88%, 1)',
      // YELLOW
      orange: '#f0ad4e',
      lightOrange: '#fac06d',
      // VIOLET
      violet: 'hsla(240, 64%, 68%, 1)',
      lightViolet: '#374569',

      // VTHO xxx
      mainBG: '#131326',
      boxGrey: '#353446',
      primaryAccent: '#7d99f1',
      primaryAccentDark: '#677cbf',
      secondaryAccent: '#511e7d',
      primaryPanel: '#374569',
      secondaryPanel: '#5d4457'
    },

    /* ------------------------------------------------------
                              FONTS
    ------------------------------------------------------ */
    fonts: {
      font: '14px/1.5 Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
    },

    /* ------------------------------------------------------
                                  BORDERS
    ------------------------------------------------------ */
    borders: {
      primary_borderRadius: '3px',
      secondary_borderRadius: '5px'
    }
  }

    /* --------------------------------------------------------------------------
                                   APP PROPERTIES
   -------------------------------------------------------------------------- */

    var appProperties = {

    /* ------------------------------------------------------
                          ACE THEME
    ------------------------------------------------------ */

    aceTheme: 'tomorrow_night_blue',

    /* ------------------------------------------------------
                          BACKGROUND COLORS
    ------------------------------------------------------ */
    primary_BackgroundColor: cssProperties.colors.mainBG,
    secondary_BackgroundColor: cssProperties.colors.boxGrey,
    tertiary_BackgroundColor: cssProperties.colors.greyBlueNight,
    quaternary_BackgroundColor: cssProperties.colors.blueGreyEve,
    fifth_BackgroundColor: cssProperties.colors.bluePruneEve,
    seventh_BackgroundColor: cssProperties.colors.blueMonday,
    dark_BackgroundColor: cssProperties.colors.black,
    light_BackgroundColor: cssProperties.colors.white,
    debuggingMode_BackgroundColor: cssProperties.colors.lightViolet,
    highlight_BackgroundColor: cssProperties.colors.greyBlueMed,
    primaryPanelBG: cssProperties.colors.primaryPanel,
    //secondaryPanelBG: cssProperties.colors.secondaryPanel,
    /* ------------------------------------------------------
                              RESIZING
    ******************************************************** */
    ghostBar: cssProperties.colors.blueLightTrans,
    draggingBar: cssProperties.colors.secondaryAccent,

    /* ------------------------------------------------------
                            TEXT COLORS
    ******************************************************** */
    mainText_Color: cssProperties.colors.white,
    supportText_Color: cssProperties.colors.lightBlue,
    sub_supportText_Color: cssProperties.colors.greyBlueLight,
    specialText_Color: cssProperties.colors.primaryAccent,
    brightText_Color: cssProperties.colors.blueMascara,
    oppositeText_Color: cssProperties.colors.black,
    additionalText_Color: cssProperties.colors.white,
    errorText_Color: cssProperties.colors.strongRed,
    warningText_Color: cssProperties.colors.orange,
    infoText_Color: cssProperties.colors.violet,
    greyedText_color: cssProperties.colors.desatGrey,
    /* ------------------------------------------------------
                              ICONS
    ******************************************************** */
    icon_Color: cssProperties.colors.white,
    icon_AltColor: cssProperties.colors.mainBG,
    icon_HoverColor: cssProperties.colors.orange,
    icon_ConstantColor: cssProperties.colors.white,

    /* ------------------------------------------------------
                            MESSAGES
    ******************************************************** */
    // Success
    success_TextColor: cssProperties.colors.white,
    success_BackgroundColor: cssProperties.colors.green,
    success_BorderColor: cssProperties.colors.lightGreen,

    // Danger
    danger_TextColor: cssProperties.colors.white,
    danger_BackgroundColor: cssProperties.colors.red,
    danger_BorderColor: cssProperties.colors.lightRed,

    // Warning
    warning_TextColor: cssProperties.colors.black,
    warning_BackgroundColor: cssProperties.colors.orange,
    warning_BorderColor: cssProperties.colors.orange,

    // Tooltip
    tooltip_Color: cssProperties.colors.white,
    tooltip_BackgroundColor: cssProperties.colors.grey,
    tooltip_BorderColor: cssProperties.colors.grey,

    /* ------------------------------------------------------
                          DROPDOWN
    ******************************************************** */
    dropdown_TextColor: cssProperties.colors.primaryAccent,
    dropdown_BackgroundColor: cssProperties.colors.transparent,
    dropdown_SecondaryBackgroundColor: cssProperties.colors.veryLightGrey,
    dropdown_BorderColor: cssProperties.colors.primaryAccent,

    /* ------------------------------------------------------
                            INPUT
    ******************************************************** */
    input_TextColor: cssProperties.colors.primaryAccent,
    input_BackgroundColor: cssProperties.colors.transparent,
    input_BorderColor: cssProperties.colors.primaryAccent,

    /* ------------------------------------------------------
                      SOLID BORDER BOX
    ******************************************************** */
    solidBorderBox_TextColor: cssProperties.colors.white,
    solidBorderBox_BackgroundColor: cssProperties.colors.mainBG,
    solidBorderBox_BorderColor: cssProperties.colors.primaryAccent,

    /* ------------------------------------------------------
                      SOLID BOX
    ******************************************************** */
    solidBox_TextColor: cssProperties.colors.white,
    solidBox_BackgroundColor: cssProperties.colors.mainBG,

    /* ------------------------------------------------------
                          BUTTONS
    ******************************************************** */

    /* .................
          PRIMARY
    .................. */
    primaryButton_TextColor: cssProperties.colors.mainBG,
    primaryButton_BackgroundColor: cssProperties.colors.primaryAccent,
    primaryButton_BorderColor: cssProperties.colors.primaryAccentDark,

    /* .................
          SECONDARY
    .................. */
    secondaryButton_TextColor: cssProperties.colors.mainBG,
    secondaryButton_BackgroundColor: cssProperties.colors.primaryAccent,
    secondaryButton_BorderColor: cssProperties.colors.primaryAccentDark,

    /* .................
          Teriary
    .................. */
    teriaryButton_TextColor: cssProperties.colors.white,
    teriaryButton_BackgroundColor: cssProperties.colors.greyBlueMed,
    teriaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................
     /* .................
          Quaternary
    .................. */
    quaternaryButton_TextColor: cssProperties.colors.black,
    quaternaryButton_BackgroundColor: cssProperties.colors.blueMascara,
    quaternaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................
     /* .................
          Fifth
    .................. */
    fifthButton_TextColor: cssProperties.colors.black,
    fifthButton_BackgroundColor: cssProperties.colors.blueFairyDust,
    fifthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................
     /* .................
          Sixth
    .................. */
    sixthButton_TextColor: cssProperties.colors.black,
    sixthButton_BackgroundColor: cssProperties.colors.greenZing,
    sixthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................
           SUCCESS
    .................. */
    successButton_TextColor: cssProperties.colors.white,
    successButton_BackgroundColor: cssProperties.colors.green,
    successButton_BorderColor: cssProperties.colors.green,

    /* .................
          DANGER
    .................. */
    dangerButton_TextColor: cssProperties.colors.white,
    dangerButton_BackgroundColor: cssProperties.colors.red,
    dangerButton_BorderColor: cssProperties.colors.red,

    /* .................
          WARNING
    .................. */
    warningButton_TextColor: cssProperties.colors.white,
    warningButton_BackgroundColor: cssProperties.colors.lightOrange,
    warningButton_BorderColor: cssProperties.colors.lightOrange,

    /* .................
          INFO
    .................. */
    infoButton_TextColor: cssProperties.colors.black,
    infoButton_BackgroundColor: cssProperties.colors.lightPink,
    infoButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          SOLIDITY
    .................. */

    // CALL
    callButton_TextColor: cssProperties.colors.black,
    callButton_BackgroundColor: cssProperties.colors.lightBlue,
    callButton_BorderColor: cssProperties.colors.lightBlue,

    // TRANSACTION
    transactButton_TextColor: cssProperties.colors.black,
    transactButton_BackgroundColor: cssProperties.colors.primaryAccent,
    transactButton_BorderColor: cssProperties.colors.primaryAccentDark,

    // CONSTANT
    constantButton_TextColor: cssProperties.colors.black,
    constantButton_BackgroundColor: cssProperties.colors.greenZing,
    constantButton_BorderColor: cssProperties.colors.greenZing,

    // PAYABLE TRANSACTION
    transactPayableButton_TextColor: cssProperties.colors.black,
    transactPayableButton_BackgroundColor: cssProperties.colors.red,
    transactPayableButton_BorderColor: cssProperties.colors.red,

    /* ------------------------------------------------------
                            UI ELEMENTS
    ******************************************************** */

    uiElements: {
      solidBorderBox: function solidBorderBox() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n        background-color      : ' + opts.BackgroundColor + ';\n        border                : 1px solid ' + opts.BorderColor + ';\n        color                 : ' + opts.Color + ';\n        border-radius         : ' + cssProperties.borders.primary_borderRadius + ';\n        font-size             : 12px;\n        padding               : 10px 15px;\n        line-height           : 20px;\n        overflow              : hidden;\n        word-break            : break-word;\n        width                 : 100%;\n      ';
      },

      solidBox: function solidBox() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n        background-color      : ' + opts.BackgroundColor + ';\n        color                 : ' + opts.Color + ';\n        font-size             : 12px;\n        padding               : 10px 15px;\n        line-height           : 20px;\n        overflow              : hidden;\n        word-break            : break-word;\n        width                 : 100%;\n      ';
      },

      dottedBorderBox: function dottedBorderBox() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n        background-color      : ' + opts.BackgroundColor + ';\n        border                : 1px solid ' + opts.BorderColor + ';\n        color                 : ' + opts.Color + ';\n        border-radius         : ' + cssProperties.borders.secondary_borderRadius + ';\n        line-height           : 20px;\n        padding               : 8px 15px;\n        margin-bottom         : 1em;\n        overflow              : hidden;\n        word-break            : break-word;\n      ';
      },

      inputField: function inputField() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n        background-color      : ' + opts.BackgroundColor + ';\n        border                : 1px solid ' + opts.BorderColor + ';\n        color                 : ' + opts.Color + ';\n        border-radius         : ' + cssProperties.borders.secondary_borderRadius + ';\n        height                : 25px;\n        width                 : 250px;\n        padding               : 0 8px;\n        overflow              : hidden;\n        word-break            : normal;\n      ';
      },

      dropdown: function dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n        background-color      : ' + opts.BackgroundColor + ';\n        border                : 1px solid ' + opts.BorderColor + ';\n        color                 : ' + opts.Color + ';\n        font-size               : 12px;\n        font-weight             : bold;\n        padding                 : 0 8px;\n        text-decoration         : none;\n        cursor                  : pointer;\n        border-radius           : 3px;\n        height                  : 25px;\n        width                   : 250px;\n        text-align              : center;\n        overflow                : hidden;\n        word-break              : normal;\n      ';
      },

      button: function button() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return '\n      margin                  : 1px;\n      background-color        : ' + opts.BackgroundColor + ';\n      border                  : .3px solid ' + opts.BorderColor + ';\n      color                   : ' + opts.Color + ';\n      display                 : flex;\n      align-items             : center;\n      justify-content         : center;\n      border-radius           : 3px;\n      cursor                  : pointer;\n      min-height              : 25px;\n      max-height              : 25px;\n      width                   : 70px;\n      min-width               : 70px;\n      font-size               : 12px;\n      overflow                : hidden;\n      word-break              : normal;\n      ';
      }
    }
}
    /* --------------------------------------------------------------------------
                               REMIX PROPERTIES
     -------------------------------------------------------------------------- */

    var remixProperties = {
    /* ------------------------------------------------------
                            REMIX GENERAL
    /* ------------------------------------------------------ */
    remix: {
      modalDialog_BackgroundColor_Primary: appProperties.secondary_BackgroundColor,
      modalDialog_text_Primary: appProperties.additionalText_Color,
      modalDialog_text_Secondary: appProperties.supportText_Color,
      modalDialog_text_Link: appProperties.specialText_Color,
      modalDialog_text_Em: appProperties.specialText_Color,
      modalDialog_Header_Footer_BackgroundColor: appProperties.primaryPanelBG,
      modalDialog_Header_Footer_Color: appProperties.mainText_Color,
      modalDialog_BoxDottedBorder_BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
      modalDialog_BoxDottedBorder_BorderColor: appProperties.solidBorderBox_BorderColor,
      modalDialog_BoxDottedBorder_Color: appProperties.solidBorderBox_TextColor,

      tooltip_CopyToClipboard_BackgroundColor: appProperties.tooltip_BackgroundColor,
      tooltip_CopyToClipboard_Color: appProperties.tooltip_Color,

      icon_Color_CopyToClipboard: appProperties.icon_Color,
      icon_HoverColor_CopyToClipboard: appProperties.icon_HoverColor
    },

    /* ------------------------------------------------------
                    LEFT PANEL (FILE PANEL)
    /* ------------------------------------------------------ */
    leftPanel: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_FileExplorer: appProperties.tertiary_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                              EDITOR
    /* ------------------------------------------------------ */
    editor: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_Editor: appProperties.primary_BackgroundColor+" !important",
      backgroundColor_Tabs_Highlights: appProperties.secondary_BackgroundColor,
      backgroundColor_Editor_Context_Highlights: appProperties.dark_BackgroundColor,
      backgroundColor_Editor_Context_Error_Highlights: appProperties.error_BackgroundColor,
      backgroundColor_DebuggerMode: appProperties.debuggingMode_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_Editor: '',

      icon_Color_Editor: appProperties.icon_Color,
      icon_HoverColor_Editor: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                          TERMINAL
    /* ------------------------------------------------------ */
    terminal: {
      backgroundColor_Menu: appProperties.secondary_BackgroundColor,
      backgroundColor_Terminal: appProperties.primary_BackgroundColor,
      backgroundColor_TerminalCLI: appProperties.primary_BackgroundColor,
      backgroundImage_Terminal: "url('./assets/img/vechain-vtho.svg')",

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_RegularLog: appProperties.mainText_Color,
      text_InfoLog: appProperties.supportText_Color,
      text_WarnLog: appProperties.warningText_Color,
      text_ErrorLog: appProperties.errorText_Color,
      text_Title_TransactionLog: appProperties.infoText_Color,
      text_Regular_TransactionLog: appProperties.supportText_Color,
      text_Button: appProperties.oppositeText_Color,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,
      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      input_Search_MenuBar: appProperties.uiElements.inputField({
        BackgroundColor: appProperties.input_BackgroundColor,
        BorderColor: appProperties.input_BorderColor,
        Color: appProperties.input_TextColor
      }),

      dropdown_Filter_MenuBar: appProperties.uiElements.dropdown({
        BackgroundColor: appProperties.dropdown_BackgroundColor,
        BorderColor: appProperties.dropdown_BorderColor,
        Color: appProperties.dropdown_TextColor
      }),

      button_Log_Debug: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.infoButton_BorderColor,
        Color: appProperties.infoButton_TextColor
      }),

      button_Log_Details: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.quaternaryButton_BorderColor,
        Color: appProperties.quaternaryButton_TextColor
      })

    },

    /* ------------------------------------------------------
                              RIGHT PANEL
    /* ------------------------------------------------------ */
    rightPanel: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_Tab: appProperties.secondary_BackgroundColor,
      //backgroundColor_Active_Tab: appProperties.secondary_BackgroundColor,
      BackgroundColor_Pre: appProperties.dark_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_link: appProperties.brightText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,

      message_Warning_BackgroundColor: appProperties.warning_BackgroundColor,
      message_Warning_BorderColor: appProperties.warning_BorderColor,
      message_Warning_Color: appProperties.warning_TextColor,

      message_Error_BackgroundColor: appProperties.danger_BackgroundColor,
      message_Error_BorderColor: appProperties.danger_BorderColor,
      message_Error_Color: appProperties.danger_TextColor,

      message_Success_BackgroundColor: appProperties.success_BackgroundColor,
      message_Success_BorderColor: appProperties.success_BorderColor,
      message_Success_Color: appProperties.success_TextColor,

      /* ::::::::::::::
          COMPILE TAB
      ::::::::::::::: */
      compileTab: {
        button_Compile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_Details: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_Publish: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.teriaryButton_TextColor
        }),

        dropdown_CompileContract: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        box_CompileContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.primary_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        icon_WarnCompilation_Color: appProperties.warning_BackgroundColor

      },

      /* ::::::::::::::
          RUN TAB
      ::::::::::::::: */
      runTab: {
        box_RunTab: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        dropdown_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),
        titlebox_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_SecondaryBackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_RunTab: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        box_Instance: appProperties.uiElements.solidBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        borderBox_Instance: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor,
          BorderColor: appProperties.solidBorderBox_BorderColor
        }),

        button_atAddress: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),
        button_Create: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),
        button_Constant: appProperties.uiElements.button({
          BackgroundColor: appProperties.constantButton_BackgroundColor,
          BorderColor: appProperties.constantButton_BorderColor,
          Color: appProperties.constantButton_TextColor
        }),
        button_Instance_Call: appProperties.uiElements.button({
          BackgroundColor: appProperties.callButton_BackgroundColor,
          BorderColor: appProperties.callButton_BorderColor,
          Color: appProperties.callButton_TextColor
        }),
        button_Instance_Transact: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),

        button_Instance_TransactPayable: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactPayableButton_BackgroundColor,
          BorderColor: appProperties.transactPayableButton_BorderColor,
          Color: appProperties.transactPayableButton_TextColor
        }),

        icon_Color_Instance_CopyToClipboard: appProperties.icon_Color,
        icon_AltColor_Instance_CopyToClipboard: appProperties.icon_AltColor,
        icon_HoverColor_Instance_CopyToClipboard: appProperties.icon_HoverColor

      },

      /* ::::::::::::::
         TEST TAB 
      ::::::::::::::: */
      testTab: {
        box_listTests: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_runTests: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_generateTestFile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        color_testPass: appProperties.success_BackgroundColor,
        color_testFail: appProperties.danger_BackgroundColor
      },

      /* ::::::::::::::
         SETTINGS TAB
      ::::::::::::::: */
      settingsTab: {
        box_SolidityVersionInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        dropdown_SelectCompiler: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),
		//
        button_LoadPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_initPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        })

      },

      /* ::::::::::::::
        DEBUGGER TAB
      ::::::::::::::: */
      debuggerTab: {
        text_Primary: appProperties.mainText_Color,
        text_Secondary: appProperties.supportText_Color,
        text_BgHighlight: appProperties.highlight_BackgroundColor,

        box_Debugger: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_Debugger: appProperties.uiElements.button({
          BackgroundColor: cssProperties.colors.primaryAccent,
          BorderColor: cssProperties.colors.primaryAccentDark,
          Color: appProperties.teriaryButton_TextColor
        }),

        button_Debugger_icon_Color: appProperties.icon_ConstantColor,
        button_Debugger_icon_HoverColor: appProperties.icon_HoverColor,

        dropdown_Debugger: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_Debugger: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        debuggerDropdowns_Instructions_Highlight_BackgroundColor: appProperties.secondary_BackgroundColor

      },

      /* ::::::::::::::
        ANALYSIS TAB
      ::::::::::::::: */
      analysisTab: {
        button_Run_AnalysisTab: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        box_AnalysisContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        })
      },

      /* ::::::::::::::
        SUPPORT TAB
      ::::::::::::::: */
      supportTab: {
        box_IframeContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        box_SupportInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        })

      }

    }
  };

  return {
    colors: cssProperties.colors,
    appProperties: appProperties,
    borders: cssProperties.borders,
    leftPanel: remixProperties.leftPanel,
    editor: remixProperties.editor,
    terminal: remixProperties.terminal,
    rightPanel: remixProperties.rightPanel,
    remix: remixProperties.remix
  }
}