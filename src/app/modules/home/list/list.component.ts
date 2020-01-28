import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { List } from 'src/app/shared/models/list';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  list: Array<List>;

  ngOnInit() {
    this.homeService.getList()
    .pipe(first())
    .subscribe(
      data => {
        this.list = data;
      }
    );
  }

}
