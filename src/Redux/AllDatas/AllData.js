import { DataTypeAction } from "./DataType";
const Initial_state = {
  Data_Show: null,
  Data_Db: null,
};
export const DataReduce = (state = Initial_state, action) => {
  switch (action.type) {
    case DataTypeAction.Fetch_Data_Db:
      return { ...state, Data_Db: action.payload };

    default:
      return state;
  }
};
