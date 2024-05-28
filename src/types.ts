export interface IAppState {
  news: INews[];
  broadcasters: IBroadcasters[];
  searchInputValue: string;
  isLoading: boolean;
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

export interface INews {
  htmlTitle: string;
  link: string;
  title: string;
  image: string;
  snippet: string;
  date: string;
}

export interface IGoogleNewResponse {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: [
      {
        src: string;
        width: string;
        height: string;
      }
    ];
    metatags: [
      {
        "og:image": string;
        "og:type": string;
        "twitter:card": string;
        "twitter:title": string;
        "og:site_name": string;
        author: string;
        "og:title": string;
        "twitter:label1": string;
        "twitter:label2": string;
        "og:description": string;
        "twitter:creator": string;
        "article:publisher": string;
        "twitter:image": string;
        "twitter:data1": string;
        "twitter:data2": string;
        "twitter:site": string;
        viewport: string;
        "twitter:description": string;
        "og:locale": string;
        "og:url": string;
      }
    ];
    cse_image: [
      {
        src: string;
      }
    ];
  };
}
