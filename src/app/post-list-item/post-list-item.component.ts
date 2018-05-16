import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: Date;
  @Input() loveIts: number;
  constructor() { }

  ngOnInit() {
  }

  onlike() {
    this.loveIts = this.loveIts + 1;
    console.log(this.loveIts);
  }
  onDislike() {
    this.loveIts = this.loveIts - 1;
    console.log(this.loveIts);
  }

}
