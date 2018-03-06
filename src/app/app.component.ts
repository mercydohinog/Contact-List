import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  firstname: string;
  lastname: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
}

interface PostId extends Post { 
  id: string; 
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  firstname: string;
  lastname: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;


  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {}
  
    ngOnInit() {
     this.postsCol = this.afs.collection('contactlist', ref => ref.where('title', '==', 'coursetro'));
      this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
    }

    addPost() {
    this.afs.collection('contactlist').doc('my-custom-id').set({'firstname': this.firstname, 'lastname': this.lastname, 'phone': this.phone, 'mobile': this.mobile,
    'email': this.email, 'address': this.address});
  }

   getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

   deletePost(postId){
    this.afs.doc('posts/'+postId).delete();
  }
}