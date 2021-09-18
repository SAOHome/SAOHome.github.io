export type LocalDataManagerStateType = {
  data: any | undefined
}

export enum LOCALDATA_STRING {
  SAVE_LOCALDATA = 'SAVE_LOCALDATA',
  CLEAR_LOCALDATA = 'CLEAR_LOCALDATA',
}

interface LocalDataManagerBaseActionType {
  type: LOCALDATA_STRING
}

interface LocalDataManagerShowLocalDataActionType
  extends LocalDataManagerBaseActionType {
  type: LOCALDATA_STRING.SAVE_LOCALDATA
  data: LocalDataManagerStateType
}

interface LocalDataManagerHideLocalDataActionType
  extends LocalDataManagerBaseActionType {
  type: LOCALDATA_STRING.CLEAR_LOCALDATA
}

export type LocalDataManagerActionTypes =
  | LocalDataManagerShowLocalDataActionType
  | LocalDataManagerHideLocalDataActionType
