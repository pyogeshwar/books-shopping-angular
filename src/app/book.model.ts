/* eslint-disable @typescript-eslint/ban-types */

export interface Book {
  kind: string;
  totalItems: number;
  items: BookDetails[];
}

export interface BookDetails {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: {
    title?: string;
    authors?: string;
    description?: string;
    ratingsCount?: string;
    pageCount?: string;
    language?: string;
    publishedDate?: string;
    averageRating?: number;
    printType: string;
    maturityRating: string;
    contentVersion: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    publisher?: string;
  };
  saleInfo?: object;
  accessInfo?: object;
  searchInfo?: object;
  removeCartSymbole?: boolean;
}
