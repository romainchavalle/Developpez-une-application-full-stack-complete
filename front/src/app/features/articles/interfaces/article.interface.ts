export interface Article {
  id: number;
  title: string;
  content: string;
  subjectId: number;
  created_at: Date;
  authorName?: string;
  subjectName?: string;
}
