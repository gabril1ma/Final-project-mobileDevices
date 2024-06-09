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
    metatags: IGoogleNewResponseMetatag[];
    cse_image: [
      {
        src: string;
      }
    ];
  };
}

export interface IGoogleNewResponseMetatag {
  og_image: string;
  og_type: string;
  twitter_card: string;
  twitter_title: string;
  og_site_name: string;
  author: string;
  og_title: string;
  twitter_label1: string;
  twitter_label2: string;
  og_description: string;
  twitter_creator: string;
  article_publisher: string;
  twitter_image: string;
  twitter_data1: string;
  twitter_data2: string;
  twitter_site: string;
  viewport: string;
  twitter_description: string;
  og_locale: string;
  og_url: string;
}
