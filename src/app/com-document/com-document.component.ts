import {
  Component,
  OnsLazyRepeat,
  ViewChild,
  OnInit,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'app-com-document',
  templateUrl: './com-document.component.html',
  styleUrls: ['./com-document.component.scss']
})
export class ComDocumentComponent implements OnInit {
  public items: any[] = [];
  @ViewChild(OnsLazyRepeat) lazyRepeat;

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push({
        msg: 'Hello!'
      });
    }
  }

  add() {
    this.items.unshift({
      msg: 'Bonjour!'
    });
    this.lazyRepeat.refresh();
  }
}
