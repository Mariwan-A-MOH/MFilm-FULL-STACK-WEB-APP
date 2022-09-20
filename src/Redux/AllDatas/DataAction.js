import { DataTypeAction } from "./DataType"
export const DataFetchAction=(Data)=>({
  type:DataTypeAction.Fetch_Data_Db,
  payload:Data
})

