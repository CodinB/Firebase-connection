import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allPost: Observable<Post[]>;

  postCollection: AngularFirestoreCollection<Post>;

  constructor(private fst: AngularFirestore) { 
    this.postCollection = fst.collection<Post>('posts');
  }

  private retrievePosts(){
    this.allPost = this.postCollection.valueChanges(); //will fire everytime a value is changed in DB
  }

  sendPost(post){
    // this.allPost.push(post);
    console.log(post);
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }

  getAllPosts(){
    this.retrievePosts();
    return this.allPost;
  }
}

//database
//formula for match win
