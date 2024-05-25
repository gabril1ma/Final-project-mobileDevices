import { IGoogleNewResponse, INews } from "../types";

export default class NewsDTO implements INews {
  htmlTitle: string;
  link: string;
  title: string;
  broadcaster: string;

  constructor(googleNew: IGoogleNewResponse) {
    this.htmlTitle = googleNew.htmlTitle;
    this.link = googleNew.link;
    this.title = googleNew.title;
    this.broadcaster = googleNew.pagemap.metatags[0]["og:site_name"];
  }
}
