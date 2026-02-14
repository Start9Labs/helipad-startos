import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { setPassword } from '../actions/getPassword'

export const initializeService = sdk.setupOnInit(async (effects) => {
  storeJson.read((s) => s.password).onChange(effects, async (password) => {
    if (!password) {
      await sdk.action.createOwnTask(effects, setPassword, 'critical', {
        reason: i18n('Set your Helipad password'),
      })
    }
    return { cancel: false }
  })
})
