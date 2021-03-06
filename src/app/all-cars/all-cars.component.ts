import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  posts;
  constructor(private service: PostService) {
    this.posts = this.service.getPosts();
  }
  addToCart(id){
    this.posts[id].inCart = true;
    this.service.onAddToCart(id);
  }

  ngOnInit() {
    (<HTMLTitleElement>document.getElementsByTagName("title")[0]).innerText = "Cars | HaZeMart";

  }

}
