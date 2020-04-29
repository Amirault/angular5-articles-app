export type Article = RawArticle & { id: number };

export type RawArticle = {
  title: string;
  content: string;
  authors: string;
};
