import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-previus',
  templateUrl: './next-previus.component.html',
  styleUrls: ['./next-previus.component.scss']
})
export class NextPreviusComponent implements OnInit {

  constructor() { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
