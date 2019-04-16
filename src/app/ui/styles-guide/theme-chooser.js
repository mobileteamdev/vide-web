var styleGuideLight = require('./style-guide')
var styleGuideDark = require('./styleGuideDark')
var styleGuideVTHO = require('./styleGuideVTHO')
var Storage = require('../../../../vide_modules/vide-lib').Storage

module.exports = {

  chooser: function () {
    var themeStorage = new Storage('style:')
    if (themeStorage.exists('theme')) {
      if (themeStorage.get('theme') === 'dark') {
        return styleGuideDark()
      } else if (themeStorage.get('theme') === 'vtho') {
        return styleGuideVTHO()
      } else {
        return styleGuideLight()
      }
    } else {
      return styleGuideVTHO()
    }
  },

  switchTheme: function (theme) {
    var themeStorage = new Storage('style:')
    themeStorage.set('theme', theme)
    if (theme === 'dark') {
      return styleGuideDark()
    } else if (theme === 'light') {
      return styleGuideLight()
    } else if (theme === 'vtho') {
      return styleGuideVTHO()
    } else {
      return styleGuideLight()
    }
  }
}