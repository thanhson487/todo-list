import * as type from "./..//constants/listData";
const initialState = {
  listData: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CALL_LIST_DATA_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        listData: data,
      };
    }
    case type.CALL_LIST_DATA_FALSE: {
      return {};
    }
    case type.DELETE_TODO: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
