import { combineReducers } from 'redux-immutable'

import { reducer as main } from 'pages/main/store'
import { reducer as recommand } from 'pages/discover/recommand/store'

export default combineReducers({
  main,
  recommand
})