const yo = require('yo-yo')
const csjs = require('csjs-inject')
const remixLib = require('../../../vide_modules/vide-lib')

var globalRegistry = require('../../global/registry')
const styles = require('../ui/styles-guide/theme-chooser').chooser()

const EventManager = remixLib.EventManager

module.exports = class SupportTab {
  constructor (localRegistry) {
    const self = this
    self.event = new EventManager()
    self._view = { el: null, config: {} }
    self.data = { gitterIsLoaded: false }
    self._components = {}
    self._components.registry = localRegistry || globalRegistry

    self._deps = {
      app: self._components.registry.get('app').api
    }

    self._deps.app.event.register('tabChanged', (tabName) => {
      if (tabName !== 'Support' || self.data.gitterIsLoaded) return
      self._view.el.style.display = 'block'
      self.data.gitterIsLoaded = true
    })
  }
  render () {
    const self = this
    if (self._view.el) return self._view.el
    self._view.config.remixd = yo`
      <div class="${css.info}">
        <div class=${css.title}>Accessing local files</div>
        <div class="${css.crow}">
          Remixd is a tool which allow Remix IDE to access files located in your local computer.
          it can also be used to setup a development environment.
        </div>
      </div>`
    self._view.el = yo`
      <div class="${css.supportTabView}" id="supportView">
        <div class="${css.infoBox}">
          Have a question, found a bug or want to propose a feature? Please join the discord group [<a target="_blank" href='https://discord.gg/8PxeXNa'>Vechain IDE</a>]<br>
		  or check out
          <a target="_blank" href='https://vide.readthedocs.io/en/latest/'> the documentation page on VIDE</a> or
          <a target="_blank" href='https://solidity.readthedocs.io/en/latest/'> Solidity</a>.
        </div>
      </div>`
    return self._view.el
  }
}

const css = csjs`
  .supportTabView {
    height: 100%;
    padding: 2%;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
  }
  .infoBox {
    ${styles.rightPanel.supportTab.box_SupportInfo}
  }
  .info {
    ${styles.rightPanel.settingsTab.box_SolidityVersionInfo};
    margin-top: 1em;
    word-break: break-word;
  }
  .title {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 1em;
  }
  .crow {
    display: flex;
    overflow: auto;
    clear: both;
    padding: .2em;
  }
  .crow label {
    cursor:pointer;
  }
  .crowNoFlex {
    overflow: auto;
    clear: both;
  }
`
