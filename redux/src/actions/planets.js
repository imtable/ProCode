import axios from 'axios';


const types = {
  PLANET_LOAD_PENDING: 'PLANET_LOAD_PENDING',
  PLANET_LOAD_FAIL: 'PLANET_LOAD_FAIL',
  PLANET_ADD: 'PLANET_ADD',
}

const actionOne = async (id) => {
  const action = {type: types.PLANET_LOAD_PENDING, payload: { id }};
  return action;
}

const actionTwo = async (id) => {
  const url = `https://www.swapi.tech/api/planets/${id}/`;
  const result = await axios.get(url);
  
  if (result.status !== 200) {
    const action = {type: types.PLANET_LOAD_FAIL, payload: { id }};
    return action;
  }
  
  const action = {type: types.PLANET_ADD, payload: { id, item: result.data.result.properties }};
  return action;
}

const getById = async (id, dispatch) => {
  dispatch(await actionOne(id));
  dispatch(await actionTwo(id));
}


export { types, getById };
