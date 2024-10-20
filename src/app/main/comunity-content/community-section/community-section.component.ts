import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.scss'],
})
export class CommunitySectionComponent  implements OnInit {

  @Input() Title: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit() {}

}
