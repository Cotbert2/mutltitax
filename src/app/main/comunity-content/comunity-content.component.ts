import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunity-content',
  templateUrl: './comunity-content.component.html',
  styleUrls: ['./comunity-content.component.scss'],
})
export class ComunityContentComponent  implements OnInit {

  constructor() { }

  labels : any = [
    {
      title : 'Important: ',
      description : 'Lately, instability has been seen on the mars floor, it is reported to use the internal protection of the exploration suits to avoid radiation related illnesses.'
    },
    {
      title: 'Meeting: ',
      description: 'The leaders of each section are informed about the important meeting about the increase of radiation on the mars floor.'
    },
    {
      title: 'Entretaiment: ',
      description: 'For the start of our exploration mission we invite the crew members to a get-together at the end of the day this week.'
    },
    {
      title: 'Happy Face: ',
      description: ' Remember you are an important member of the mission, try to be the best you can, sleep well and work better.'
    },
    {
      title: 'Work: ',
      description: 'Remember to complete your work day, or it will be deducted from your final salary plus penalty.'
    }
  ]

  ngOnInit() {}

  openWebsite() : void {
    window.open('https://671841c127d55.site123.me/', '_blank');
  }

}
