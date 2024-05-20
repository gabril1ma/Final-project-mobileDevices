export interface IAppState {
  broadcasters: IBroadcasters[];
}

export interface IAppContext {
  appState: IAppState;
  setAppState: React.Dispatch<React.SetStateAction<IAppState>>;
}

export interface IBroadcasters {
  name: string;
  urlAPI: string;
  selected: boolean;
}
