import { CareerDB } from "./Career";

export type CareersList =
  {
    count: number;
    next: string | null;
    previous: string | null;
    results: CareerDB[];
  }

export const INITIAL_CAREERS_LIST_DATA: CareersList = {
  count: 0,
  next: null,
  previous: null,
  results: []
}
