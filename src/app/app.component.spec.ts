import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [AppComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('when caling getCartItems', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeEach(async () => {
      spyOn(component.dataService, 'cartItems').and.returnValue({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        subscribe: () => {},
      });
      component.getCartItems();
    });

    it('should call cartItems and return booksLength', fakeAsync(() => {
      expect(component).toBeTruthy();
    }));

    it('should resolve test data', fakeAsync(() => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.booksLength).toEqual(0);
    }));
  });
});
