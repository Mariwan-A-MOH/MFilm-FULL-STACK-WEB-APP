import { createSelector } from "reselect";
const m=0;
const All_Data = (state) => state.Data;

export const CollectionSelect = createSelector(All_Data, (Data) =>
  Data.Data_Db
    ? Object.keys(Data.Data_Db).map((index) => Data.Data_Db[index])
    :[]
);

export const DataSelect = createSelector(All_Data, (Data) =>
  Data.Data_Db ? Data.Data_Db : {}
);
// export const CollectionDataSelector = (paramId) =>
//   createSelectoKr(All_Data, (Data) =>
//     Data.Data_Db ? Data.Data_Db[paramId] : {}

//   );
export const CollectionDataMoviesr =createSelector(All_Data, (Data) =>
    Data.Data_Db ? Data.Data_Db.movies : {}
  );
export const CollectionDataSeries =createSelector(All_Data, (Data) =>
    Data.Data_Db ? Data.Data_Db.series : {}
  );

export const ListSelector = createSelector(All_Data, (Data) =>
  Data.Data_Show ? Object.keys(Data.Data_Show) : []
);
