import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../service/articles.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService: ArticlesService, private userService: UsersService) { }

  articles: any = [];
  comments: any = [];
  articleTitle: any = {
    title: ""
  }

  inputComment: any ={
    content: ""
  }
  articleId: any

  ngOnInit(): void {
    this.getAllArticle();
  }

  getAllArticle() {
    this.articleService.getArticles().subscribe(
      (article) => {
        console.warn(article);
        this.articles = article;
      },
      (err) => {
        console.warn(err),
          this.userService.loggedOut()
      });
  }

  getArticleComment(idArticles: any){
    this.articleService.getComments(idArticles).subscribe(
      (comment) => {
        console.warn(comment);
        this.comments = comment;
        this.articleTitle = comment;
        this.articleId = comment;
      },
      (err) => {
        console.warn(err)
      });
  }

  commentToArticle(id: any){
    console.warn(id)
    console.warn(this.inputComment)
    this.articleService.postComments(id, this.inputComment).subscribe(
      (comment) => {
        console.warn(comment);
        this.getArticleComment(id);
        this.inputComment.content = ""
      },
      (err) => {
        console.warn(err)
      });
    
  }

}
