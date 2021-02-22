import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { User } from '../../user';
import { BooksFacade } from 'src/app/store/facades/books.facades';

@Component({
  templateUrl: './billing.component.html',
})
export class BillingComponent {
  userForm: FormGroup;
  user: User;

  constructor(
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dataService: DataService,
    private booksFacade: BooksFacade
  ) {
    this.validateUserForm();
  }

  public validateUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  onSubmit(post): void {
    // user.push(post);
   // this.booksFacade.userInfo(post);

    const books = this.booksFacade.finalItemList$;
    books.subscribe((item) => {
      this.booksFacade.orderedItems(item);
    });

    if (post) {
      this.dialog.open(DialogComponent);
    }
  }
}
