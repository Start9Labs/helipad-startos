import { sdk } from '../sdk'
import { setPassword } from './getPassword'

export const actions = sdk.Actions.of().addAction(setPassword)
