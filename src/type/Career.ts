export type CareerBase = {
  title: string;
  content: string;
}

export type Career = CareerBase & {
  username: string;
}

export type CareerDB = Career & {
  id: number;
  created_datetime: string;
}


export const INITIAL_CAREER_DATA: Career = {
  username: '',
  title: '',
  content: '',
}
