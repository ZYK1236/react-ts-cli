import { Model } from 'react-model'
import Example from './store/example'
 
const models = { Example }
 
export const { getInitialState, useStore, getState, actions, subscribe, unsubscribe } = Model(models)