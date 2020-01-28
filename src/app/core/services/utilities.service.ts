import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  showLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('showLoading');
  }
  hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.remove('showLoading');
  }
}
