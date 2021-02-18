import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, waitForAsync } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let httpMock: HttpTestingController;
  let injector: TestBed;
  let service;
  let searchValue;
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
    {
      kind: 'books#volume',
      id: '6JVCAwAAQBAJ',
      etag: 'hlStCIjV/uI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ',
      volumeInfo: {
        title: 'Object Thinking',
        authors: ['David West'],
        publisher: 'Microsoft Press',
        publishedDate: '2004-02-11',
        description:
          'In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes the programmer—not the tools and techniques. Delving into the history, philosophy, and even politics of object-oriented programming, West reveals how the best programmers rely on analysis and conceptualization—on thinking—rather than formal process and methods. Both provocative and pragmatic, this book gives form to what’s primarily been an oral tradition among the field’s revolutionary thinkers—and it illustrates specific object-behavior practices that you can adopt for true object design and superior results. Gain an in-depth understanding of: Prerequisites and principles of object thinking. Object knowledge implicit in eXtreme Programming (XP) and Agile software development. Object conceptualization and modeling. Metaphors, vocabulary, and design for object development. Learn viable techniques for: Decomposing complex domains in terms of objects. Identifying object relationships, interactions, and constraints. Relating object behavior to internal structure and implementation design. Incorporating object thinking into XP and Agile practice.',
        industryIdentifiers: [
          { type: 'ISBN_13', identifier: '9780735637511' },
          { type: 'ISBN_10', identifier: '0735637512' },
        ],
        readingModes: { text: true, image: true },
        pageCount: 368,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '3.6.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 2064.52, currencyCode: 'INR' },
        retailPrice: { amount: 929.03, currencyCode: 'INR' },
        buyLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: { amountInMicros: 2064520000, currencyCode: 'INR' },
            retailPrice: { amountInMicros: 929030000, currencyCode: 'INR' },
          },
        ],
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: { isAvailable: false },
        pdf: { isAvailable: false },
        webReaderLink:
          'http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Application View Application Object w/ application ApplicationDispatcher <br>\ncomposite w/ dispatcher application&#39;s <b>object</b>-<b>object</b> dispatcher composed of <br>\nobject views Object-View Dispatcher Composite object view <b>Object</b>-<b>Object</b> <br>\nDispatcher&nbsp;...',
      },
      type: '[Cart] Add To Cart',
      purchaseInfo: {
        address:
          'flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar',
        name: 'arthireddy pedditti',
        email: 'a@test.com',
        phoneNumber: '8019133370',
      },
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      }).compileComponents();
      injector = getTestBed();
      httpMock = injector.inject(HttpTestingController);
      service = TestBed.inject(DataService);
      searchValue = 'bharat';
    })
  );
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks() should return data', () => {
    service.getBooks(searchValue).subscribe((res) => {
      expect(res).toEqual(initialState);
    });

    const req = httpMock.expectOne(
      'https://www.googleapis.com/books/v1/volumes?q=bharat'
    );
    expect(req.request.method).toBe('GET');
    req.flush(initialState);
  });

  it('getBooks() should return error and call handleError() method', () => {
    service.getBooks(searchValue).subscribe(
      (res) => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.statusText).toEqual('Not Found');
        expect(service.handleError).toHaveBeenCalled();
      }
    );

    const req = httpMock.expectOne(
      'https://www.googleapis.com/books/v1/volumes?q=bharat'
    );
    expect(req.request.method).toBe('GET');
    req.flush(
      { errorMessage: '404 Not Found' },
      { status: 404, statusText: 'Not Found' }
    );
  });
});
