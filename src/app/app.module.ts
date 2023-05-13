import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModelComponent } from './model/model.component';
import { NavsAndTabsComponent } from './navs-and-tabs/navs-and-tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversComponent } from './popovers/popovers.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CardComponent,
    CarouselComponent,
    CloseButtonComponent,
    DropdownsComponent,
    ListGroupComponent,
    ModelComponent,
    NavsAndTabsComponent,
    NavbarComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
