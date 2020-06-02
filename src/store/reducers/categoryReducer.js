// method to open list of selected category
const initialState = {
  categoryState: -1,
  listState: -1,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY_OPEN":
      action.payload =
        state.categoryState === action.payload ? -1 : action.payload;
      return {
        ...state,
        categoryState: action.payload,
      };
    case "LIST_OPEN":
      action.payload = state.listState === action.payload ? -1 : action.payload;
      return {
        ...state,
        listState: action.payload,
      };

    case "REFRESH":
      return {
        categoryState: -1,
        listState: -1,
      };
    default:
      return state;
  }
};

export default categoryReducer;
