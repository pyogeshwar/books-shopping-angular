import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';
import { BooksFacade } from 'src/app/store/facades/books.facades';

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html',
})
export class BooksComponent {
  @Input() books: BookDetails[];
  @Input() type: string;
  @Input() isDelete: boolean;

  constructor(
    public dataService: DataService,
    private booksFacade: BooksFacade
  ) {}
  deleteCartItems(payload: BookDetails): void {
    this.booksFacade.deleteFromCart(payload);
  }
}
