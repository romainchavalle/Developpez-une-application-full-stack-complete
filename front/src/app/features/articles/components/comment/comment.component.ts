import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() articleId!: number;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.commentService.getCommentsForArticle(this.articleId)
      .subscribe(comms => this.comments = comms);
  }

  submitComment() {
    const content = this.newComment.trim();
    this.commentService.postComment(this.articleId, content )
    .subscribe({
        next: created => {
          this.comments.push(created);
          this.newComment = '';
        },
        error: err => console.error('Échec envoi commentaire', err)
      });
  }

}
