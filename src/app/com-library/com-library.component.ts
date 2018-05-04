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
  selector: 'app-com-library',
  templateUrl: './com-library.component.html',
  styleUrls: ['./com-library.component.scss']
})
export class ComLibraryComponent implements OnInit {
  public items: any[] = [];
  public gridView = false;
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

  switch() {
    this.gridView = !this.gridView;
  }
}
