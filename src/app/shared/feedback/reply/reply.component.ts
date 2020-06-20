import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'app/service/feedback.service';
import { ActivatedRoute } from '@angular/router';
declare var $
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  public answers: any = []
  constructor(public api: FeedbackService, private activatedRoute: ActivatedRoute) { }

  ngOnInit () { document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


    this.answers = this.activatedRoute.snapshot.data.response.data.answers

    setTimeout(() => {
      document.getElementById(`replyNone-${this.answers[0].id}`).style.display = 'block'
    }, 10);
  }


  reply() {

    document.getElementById('reply').style.display = 'block'
    document.getElementById('descartarReply').style.display = 'block'
    document.getElementById('enviarReply').style.display = 'block'
    document.getElementById(`replyNone-${this.answers[0].id}`).style.display = 'none'

  }
  successfully() {

    document.getElementById('reply').style.display = 'none'
    document.getElementById('descartarReply').style.display = 'none'
    document.getElementById(`replyNone-${this.answers[0].id}`).style.display = 'block'
    document.getElementById('enviarReply').style.display = 'none'

  }

  deleted() {
    const node = document.getElementById(localStorage.getItem('obj'))
    node.parentNode.removeChild(node)
  }



  public options: Object = {
    height: 200,
    shortcuts: false,
  }

  public edit = {
    'height': '30vh',
  }

}
