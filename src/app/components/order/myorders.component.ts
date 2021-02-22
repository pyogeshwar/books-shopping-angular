import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../user';
import { BooksFacade } from 'src/app/store/facades/books.facades';
import { BookDetails } from '../../book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'myorders.component.html',
})
export class MyOrdersComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orderedBooks$: Observable<BookDetails[]>;
  user$: Observable<User>;
  constructor(
    public dataService: DataService,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.orderedBooks$ = this.booksFacade.orderedBooks$;
   // this.user$ = this.booksFacade.userInfo$;
  }
}
