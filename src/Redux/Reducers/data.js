const initialState = {
    name: 'hello',
    email: '',
    searchName:"Astronaut riding a horse",
    searchedData:"",
    allData:[]
  };
  
  const data = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_SearchName':
        return { ...state, searchName: action.payload}  
      case 'SET_SearchedData':
        state.allData.push(state.searchedData);
        return { ...state, searchedData: action.payload}  
      case 'SET_ALLDATA':
        return { ...state, allData: action.payload}  
      default:
        return state;
    }
  };
    
  export default data;