import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './components/search/searchbooks.component';

import { BookComponent } from './components/book/book.component';
import { MyCartComponent } from './components/cart/mycart.component';
import { BillingComponent } from './components/billing/billing.component';
import { MyOrdersComponent } from './components/order/myorders.component';
import { DataService } from './services/data.service';
import { BooksComponent } from './components/books/books.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { booksReducer } from '../app/store/reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effects/book.effects';
import { BooksFacade } from 'src/app/store/facades/books.facades';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

export const reducers: ActionReducerMap<any> = {
  books: booksReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    BookComponent,
    MyCartComponent,
    MyOrdersComponent,
    BillingComponent,
    BooksComponent,
  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    DataService,
    BooksFacade,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
