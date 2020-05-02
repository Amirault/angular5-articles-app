export type Article = RawArticle & { id: ArticleId };

export type RawArticle = {
  title: string;
  content: string;
  authors: string;
};

const ArticleIdFlag = Symbol();
export type ArticleId = number & { [ArticleIdFlag]: true };

export function toArticleId(idString: string): ArticleId | undefined {
  const id = Number(idString);
  if (!isNaN(id)) {
    return id as ArticleId;
  } else {
    return undefined;
  }
}
