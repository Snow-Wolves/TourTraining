import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faTrash as faTrash } from '@fortawesome/free-solid-svg-icons';

import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})

export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrash);
  }
}
