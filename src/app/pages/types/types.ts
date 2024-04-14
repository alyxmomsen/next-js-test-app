export interface UserData {
  id: string | undefined;
  name: string | undefined;
  password: string | undefined;
  email: string | undefined;
}

export interface iGlobalState {
  users: UserData[];
  current: UserData | null;
}

export type tReducerType = (
  state: iGlobalState,
  action: { type: string; payload: Partial<iGlobalState> },
) => iGlobalState;
