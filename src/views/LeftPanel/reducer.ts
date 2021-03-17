import produce from 'immer'
import { CHANGE_ACTIVE_KEY } from './action';
const INITIAL_STATE = {
  activeKey: 'discover'
}
const leftPaneReducer = produce((draft, action)=>{
  switch (action.type) {
    case CHANGE_ACTIVE_KEY:
      draft.activeKey = action.payload
      break;
  
    default:
      break;
  }
}, INITIAL_STATE)

export default leftPaneReducer
