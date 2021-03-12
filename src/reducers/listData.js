import * as type from "./../constants/listData";
const initialState = {
  listData: null,
  openform: false,
  data: [],
  listEdit: null,
  title: "",
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
    case type.EDIT_TODO: {
      const { openform, data, title } = action.payload;

      return {
        ...state,
        openform: openform,
        listEdit: data,
        title: title,
      };
    }
    case type.EDIT_TODO_SUCCESS: {
      const data = action.payload;
      const { listData } = state;
      const index = listData.findIndex((value) => {
        return value.id === data.id;
      });
      const newListData = [...listData];
      newListData[index] = data;

      return {
        ...state,
        openform: false,
        listData: newListData,
        listEdit: null,
      };
    }
    case type.CLOSE_FORM: {
      return {
        ...state,
        openform: false,
        listEdit: null,
      };
    }
    case type.ADD_DATA: {
      const title = action.payload;
      return {
        ...state,
        openform: true,
        title: title,
      };
    }
    case type.ADD_DATA_SUCCESS: {
      return {
        ...state,
        openform: false,
        title: "",
      };
    }

    default:
      return state;
  }
};
export default reducer;
