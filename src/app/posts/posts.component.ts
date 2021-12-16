import { Component, OnInit } from '@angular/core';
import { createOptional } from '@angular/compiler/src/core';
import { PostService } from '../services/post.service';
 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts!: any[];

  constructor(private service: PostService) {
    service.getAll()
      .subscribe(
        response => {
          //console.log(response);
          this.posts = JSON.parse(JSON.stringify(response)); 
          //this.posts = Object.entries(response);          

          //console.log('GET Post='+ this.posts[0].title );
          //console.log('GET Posts=' + this.posts[4][1].title);
        },
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { someid: { id: 0, title: input.value } }
    this.service.create(post)
      .subscribe(
        response => {
          //Mosh code:
          //post['id'] = response.json().id
          post['id'] = JSON.parse(JSON.stringify(response)).id;
          // this.posts.splice(0, 0, post);
          this.posts.splice(0, 0, post);

          console.log('POST Post=' + post['id']);
          //console.log('response=' + JSON.parse(JSON.stringify(response)));
          console.log('posts=' + this.posts);
        },
        (error: Response) => {
          if(error.status === 400){
             
          }
          else{
            alert('An unexpected error occured.');
            console.log(error);
          }          
        });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost.toString());
        },
        error => {
          alert('An unexpected error occured.');
          console.log(error);
        });
  }

  deletePost(post: any) {
    // this.service.delete(34.5) //post.id
    let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => {
          //let index = this.posts.indexOf(post);
          //this.posts.splice(index, 1);
        },
        (error: Response) => {
          this.posts.splice(index, 0, post);

          if(error.status === 404){
            alert('This post has already been deleted.');
          }else{
            alert('An unexpected error occured.');
            console.log(error);
          }          
        });
  }

}
