
export enum WasherState {
  POWEROFF = '@WM_STATE_POWER_OFF_W',
  INITIAL = '@WM_STATE_INITIAL_W',
  PAUSE = '@WM_STATE_PAUSE_W',
  RESERVED = '@WM_STATE_RESERVE_W',
  DETECTING = '@WM_STATE_DETECTING_W',
  RUNNING = '@WM_STATE_RUNNING_W',
  RINSING = '@WM_STATE_RINSING_W',
  SPINNING = '@WM_STATE_SPINNING_W',
  DRYING = '@WM_STATE_DRYING_W',
  END = '@WM_STATE_END_W',
  COOLDOWN = '@WM_STATE_COOLDOWN_W',
  RINSEHOLD = '@WM_STATE_RINSEHOLD_W',
  WASH_REFRESHING = '@WM_STATE_WASH_REFRESHING_W',
  STEAMSOFTENING = '@WM_STATE_STEAMSOFTENING_W',
  ERROR = '@WM_STATE_ERROR_W'
}

export enum RemoteStart {
  REMOTE_START_OFF = '@CP_OFF_EN_W',
  REMOTE_START_ON = '@CP_ON_EN_W',
}

export enum ChildLock {
  CHILDLOCK_OFF = '@CP_OFF_EN_W',
  CHILDLOCK_ON = '@CP_ON_EN_W',
}

export enum SoilWash {
  NO_SOILWASH = '-',
  SOILWASH_TURBO_WASH = '@WM_FL24_TITAN_SOIL_LIGHT_W',
  SOILWASH_TIMESAVE = '@WM_FL24_TITAN_SOIL_NORMAL_W',
  SOILWASH_NORMAL = '@WM_FL24_TITAN_SOIL_HEAVY_W'
}
