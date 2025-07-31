export interface Article {
  id?: number;
  title: string;
  content: string;
  authorId: number;
  subjectId: number;
  created_at: Date;
  authorName: string;
}
