const reducer = (state, action) => {
  switch (action.type) {
    case 'GUISADO_TEXT':
      return {
        ...state,
        optionText: action.payload,
      };

    case 'ADD_DATE':
      return {
        ...state,
        date: action.payload,
      };

    case 'ADD_OPTION':
      return {
        ...state,
        options: [...state.options, action.payload],
      };

    case 'SET_URL':
      return {
        ...state,
        imgUrl:  action.payload,
      };

    case 'REMOVE_OPTION':
      return {
        ...state,
        options: [
          ...state.options.filter((option) => option != action.payload),
        ],
      };

    case 'CHANGE_BG_COLOR':
      return {
        ...state,
        styles: { ...state.styles, backgroundColor: action.payload },
      };

    case 'CHANGE_GR_COLOR':
      return {
        ...state,
        styles: { ...state.styles, gradientColor: action.payload },
      };

    case 'CHANGE_TX_COLOR':
      return {
        ...state,
        styles: { ...state.styles, textColor: action.payload },
      };

    case 'BACKGROUND_TYPE':
      return {
        ...state,
        styles: { ...state.styles, backgroundType: action.payload },
      };

    default:
      return state;
  }
};

export default reducer;
