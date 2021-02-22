import {
  fakeAsync,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';

import { BooksComponent } from './books.component';
import { BooksFacade } from 'src/app/store/facades/books.facades';
import { provideMockStore } from '@ngrx/store/testing';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  const initialState = [
    {
      kind: 'books#volume',
      id: 'hbE4DwAAQBAJ',
      etag: '+bYCuvGJ+RI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/hbE4DwAAQBAJ',
      volumeInfo: {
        title: 'Bharat',
        authors: ['Vineet Aggarwal'],
        publisher: 'Penguin Random House India Private Limited',
        publishedDate: '2017-09-25',
        description:
          'After Vishwamitra and The Legend of Parshu-Raam comes the epic saga of the king of Bharat-varsh! The kingdoms of Nabhi-varsh lie scattered in the wake of Parshu-Raam’s assault on corrupt Kshatriyas. While evil has been wiped out from the land, the important task of nation-building remains. In the forest of Naimish-Aranya, the stunned king of Hastinapur watches a young boy play with lion cubs. Who is this fearless child? How does his destiny entwine with that of this ancient kingdom? Will he be able to bring order to the land and defend it against the invaders lining up at its borders? Reimagined brilliantly, this novel tells the story of the son of Dushyant and Shakuntala, the grandson of Brahmarishi Vishwamitra, the man who changed the destiny of our country and gave it a brand new name—Bhaarat!',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9789386651655',
          },
          {
            type: 'ISBN_10',
            identifier: '9386651653',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: '288',
        printType: 'BOOK',
        categories: ['Fiction'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.4.3.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=hbE4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=hbE4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=hbE4DwAAQBAJ&printsec=frontcover&dq=bharat&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 224.77,
          currencyCode: 'INR',
        },
        retailPrice: {
          amount: 145.35,
          currencyCode: 'INR',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ&rdid=book-hbE4DwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 224770000,
              currencyCode: 'INR',
            },
            retailPrice: {
              amountInMicros: 145350000,
              currencyCode: 'INR',
            },
          },
        ],
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/Bharat-sample-epub.acsm?id=hbE4DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/Bharat-sample-pdf.acsm?id=hbE4DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=hbE4DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Reimagined brilliantly, this novel tells the story of the son of Dushyant and Shakuntala, the grandson of Brahmarishi Vishwamitra, the man who changed the destiny of our country and gave it a brand new name—Bhaarat!',
      },
    },
  ];
  const book = {
    kind: 'books#volume',
    id: 'hbE4DwAAQBAJ',
    etag: '+bYCuvGJ+RI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/hbE4DwAAQBAJ',
    volumeInfo: {
      title: 'Bharat',
      authors: 'Vineet Aggarwal',
      publisher: 'Penguin Random House India Private Limited',
      publishedDate: '2017-09-25',
      description:
        'After Vishwamitra and The Legend of Parshu-Raam comes the epic saga of the king of Bharat-varsh! The kingdoms of Nabhi-varsh lie scattered in the wake of Parshu-Raam’s assault on corrupt Kshatriyas. While evil has been wiped out from the land, the important task of nation-building remains. In the forest of Naimish-Aranya, the stunned king of Hastinapur watches a young boy play with lion cubs. Who is this fearless child? How does his destiny entwine with that of this ancient kingdom? Will he be able to bring order to the land and defend it against the invaders lining up at its borders? Reimagined brilliantly, this novel tells the story of the son of Dushyant and Shakuntala, the grandson of Brahmarishi Vishwamitra, the man who changed the destiny of our country and gave it a brand new name—Bhaarat!',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9789386651655',
        },
        {
          type: 'ISBN_10',
          identifier: '9386651653',
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: '288',
      printType: 'BOOK',
      categories: ['Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.4.3.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=hbE4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=hbE4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      language: 'en',
      previewLink:
        'http://books.google.co.in/books?id=hbE4DwAAQBAJ&printsec=frontcover&dq=bharat&hl=&cd=1&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ',
    },
    saleInfo: {
      country: 'IN',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 224.77,
        currencyCode: 'INR',
      },
      retailPrice: {
        amount: 145.35,
        currencyCode: 'INR',
      },
      buyLink:
        'https://play.google.com/store/books/details?id=hbE4DwAAQBAJ&rdid=book-hbE4DwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 224770000,
            currencyCode: 'INR',
          },
          retailPrice: {
            amountInMicros: 145350000,
            currencyCode: 'INR',
          },
        },
      ],
    },
    accessInfo: {
      country: 'IN',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.co.in/books/download/Bharat-sample-epub.acsm?id=hbE4DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.co.in/books/download/Bharat-sample-pdf.acsm?id=hbE4DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=hbE4DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        'Reimagined brilliantly, this novel tells the story of the son of Dushyant and Shakuntala, the grandson of Brahmarishi Vishwamitra, the man who changed the destiny of our country and gave it a brand new name—Bhaarat!',
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [BooksComponent],
      providers: [
        BooksFacade,
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteCartItems() and delete item from cart', inject(
    [BooksFacade],
    (facade: BooksFacade) => {
      const spy = spyOn(component, 'deleteCartItems').and.callThrough();
      const deleteSpy = spyOn(facade, 'deleteFromCart');
      component.deleteCartItems(book);
      expect(spy).toHaveBeenCalled();
      expect(deleteSpy).toHaveBeenCalled();
    }
  ));
});
