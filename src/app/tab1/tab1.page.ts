import { Post } from './../models/post';
import { DataService } from './../service/data.service';
import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  allPosts: Post[] = []; //global array
  model = new Post();
  constructor(private shared: SharedService, private data: DataService) {}
  //fn get called every time user navigates to tab1
  ionViewDidEnter(){
  //  console.log("Working");
  //  this.allPosts = this.data.getAllPosts();
  this.data.getAllPosts().subscribe(list => {
    console.log("Executed");
    this.allPosts = list;
  });

  /**
   * inject data service
   * get the data from the dataService
   * put the array into a global variable
   * access the variable from an *ngFor on the html
   * display the text of the message
   */
  }

}
