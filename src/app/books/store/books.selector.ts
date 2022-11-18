import { createFeatureSelector } from "@ngrx/store";
import { Book } from "./book";

// export class BooksSelector {}

export const selectBooks = createFeatureSelector<Book[]>('myBooks') //"myBooks" is feature name used in its module
