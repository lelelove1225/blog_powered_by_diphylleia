export type Content = {
  id: string;
  createdAt: Date;
  updateeAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  content: string;
  date: Date;
};

export type BlogEntries = {
  content: Content;
};
