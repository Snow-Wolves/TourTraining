import { Injectable } from '@angular/core';
import { List } from 'src/app/shared/models/list';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  currentListSubject: BehaviorSubject<List>;
  currentList: Observable<List>;
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
    this.currentListSubject = new BehaviorSubject<List>(JSON.parse(localStorage.getItem('currentList')));
    this.currentList = this.currentListSubject.asObservable();
  }

  get currentListValue(): List {
    return this.currentListSubject.value;
  }

  getList() {
    return this.http.get<any>('/api/list')
      .pipe(map(list => {
        localStorage.setItem('currentList', JSON.stringify(list));
        return list;
      }));
  }

}
