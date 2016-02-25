import {t} from '../../test.framework/index';
import {ActionBarUtil} from './actionbar_utils';

export function main() {
  t.describe('nativescript.framework: ActionBarUtil', () => {
    
    t.it('sanity', () => {   
      t.e(ActionBarUtil.SET_TITLE).toBeDefined();
      t.e(ActionBarUtil.ADD_BUTTON).toBeDefined();
      t.e(ActionBarUtil.EMPTY_ITEMS).toBeDefined();
      t.e(ActionBarUtil.STATUSBAR_STYLE).toBeDefined();
    });
  });
}
