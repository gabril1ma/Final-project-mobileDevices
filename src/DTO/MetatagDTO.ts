import { IGoogleNewResponseMetatag } from "../types";

export default class MetatagDTO implements IGoogleNewResponseMetatag {
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

  constructor(metatags: IGoogleNewResponseMetatag) {
    this.og_image = metatags["og:image"];
    this.og_type = metatags["og:type"];
    this.twitter_card = metatags["twitter:card"];
    this.twitter_title = metatags["twitter:title"];
    this.og_site_name = metatags["og:site_name"];
    this.author = metatags.author;
    this.og_title = metatags["og:title"];
    this.twitter_label1 = metatags["twitter:label1"];
    this.twitter_label2 = metatags["twitter:label2"];
    this.og_description = metatags["og:description"];
    this.twitter_creator = metatags["twitter:creator"];
    this.article_publisher = metatags["article:publisher"];
    this.twitter_image = metatags["twitter:image"];
    this.twitter_data1 = metatags["twitter:data1"];
    this.twitter_data2 = metatags["twitter:data2"];
    this.twitter_site = metatags["twitter:site"];
    this.viewport = metatags.viewport;
    this.twitter_description = metatags["twitter:description"];
    this.og_locale = metatags["og:locale"];
    this.og_url = metatags["og:url"];
  }
}
