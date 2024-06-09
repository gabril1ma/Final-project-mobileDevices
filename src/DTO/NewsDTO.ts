import { IGoogleNewResponse, INews } from "../types";
import MetatagDTO from "./MetatagDTO";

export default class NewsDTO implements INews {
  htmlTitle: string;
  link: string;
  title: string;
  date: string;
  metatags: MetatagDTO;

  constructor(googleNew: IGoogleNewResponse) {
    this.htmlTitle = googleNew.htmlTitle;
    this.link = googleNew.link;
    this.title = googleNew.title;
    this.metatags = new MetatagDTO(googleNew.pagemap.metatags[0]);
  }
}
