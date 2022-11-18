// export class BooksAction {}

import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBooksAPI = createAction("[Books API] invoke booksFetch API")

export const booksFetchAPISuccess = createAction(
    "[Books API] books fetch API success",
    props<{ allBooks: Book[] }>()
)