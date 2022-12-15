import { combineReducers } from 'redux';

import user from './user';
import languages from './languages';
import favorites from './favorites';
import theme from './theme';

const root = combineReducers({
  user,
  languages,
  favorites,
  theme,
});

export default root;
