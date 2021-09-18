import {
  LOCALDATA_STRING,
  LocalDataManagerActionTypes,
  LocalDataManagerStateType,
} from '../../types/localDataManagerType'

export const saveLocalData = (
  data: LocalDataManagerStateType
): LocalDataManagerActionTypes =>
  <LocalDataManagerActionTypes>{
    type: LOCALDATA_STRING.SAVE_LOCALDATA,
    data,
  }

export const clearLocalData =
  (): LocalDataManagerActionTypes =>
    <LocalDataManagerActionTypes>{
      type: LOCALDATA_STRING.CLEAR_LOCALDATA,
    }
