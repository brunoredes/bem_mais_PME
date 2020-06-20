import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/service/feedback.service';
import { ActivatedRoute } from '@angular/router';

declare var $
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  public category: any;
  constructor(public api: FeedbackService, private activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.category = this.activatedRoute.snapshot.data.category.data.categories

    $(function () {
      $('#editControls a').click(function (e) {
        switch ($(this).data('role')) {
          case 'h1':
          case 'h2':
          case 'p':
            document.execCommand('formatBlock', false, $(this).data('role'));
            break;
          default:
            document.execCommand($(this).data('role'), false, null);
            break;
        }

      });
    });
  }

  public options: Object = {
    height: 200,
    shortcuts: false,
  }

  public edit = {
    'height': '30vh',
  }

}
