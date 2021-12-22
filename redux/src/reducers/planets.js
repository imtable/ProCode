import update from 'immutability-helper';

import * as planetsActions from '../actions/planets';


const initialState = {
  items: [], // items: [{ id, status: 'status', item: {...} }, {}, ...]
}

const reducer = (state = initialState, action) => {
  const findItemIndex = (id) => {
    return state.items.findIndex(item => item.id === id);
  }

  switch (action.type) {
    case planetsActions.types.PLANET_LOAD_PENDING:
      {
        const item = { id: action.payload.id, status: 'in progress', item: null };
        return update(state, { items: { $push: [item] } });
      }
    case planetsActions.types.PLANET_LOAD_FAIL:
      {
        const idx = findItemIndex(action.payload.id);
        return update(state, { items: { [idx]: { status: { $set: 'fail' } } } }); // находим индекс нужного айтема по айди, обращаемся к items по этому индексу и вносим статус 'fail' этому айтему
      }
    case planetsActions.types.PLANET_ADD:
      {
        const idx = findItemIndex(action.payload.id);
        return update(state, { items: { [idx]: { status: { $set: 'ok' }, item: { $set: action.payload.item } }}});
      }
      default: return state;
  }
}

export default reducer;