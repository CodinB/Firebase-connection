import { DataService } from './../service/data.service';
import { SharedService } from './../service/shared.service';
import { Post } from './../models/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();
  constructor(private shared: SharedService, private data: DataService) {}

  sendPost(){
    this.model.from = this.shared.userName;
    console.log('posting', this.model);

    //save the post (model)
    this.data.sendPost(this.model);
    //clear form by reinitializing the object by discarding data and making new object
    this.model = new Post()
  }

}
