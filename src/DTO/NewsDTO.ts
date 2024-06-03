import { IGoogleNewResponse, INews } from "../types";

export default class NewsDTO implements INews {
  htmlTitle: string;
  link: string;
  title: string;
  broadcaster: string;
  image: string;
  snippet: string;
  date: string;
  ogTitle: string;

  constructor(googleNew: IGoogleNewResponse) {
    this.htmlTitle = googleNew.htmlTitle;
    this.link = googleNew.link;
    this.title = googleNew.title;
    this.broadcaster = googleNew.pagemap.metatags[0]["og:site_name"];
    this.image = googleNew.pagemap.cse_image[0].src;
    this.date = googleNew.pagemap.metatags[0]["article:published_time"];
    this.ogTitle = googleNew.pagemap.metatags[0]["og:title"];
  }
}
