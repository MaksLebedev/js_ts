export type UserType = {
  name: string;
  hair: number;
  address: { city: string; house?: number };
};

export type LaptopType = {
  title: string;
};

export type UserWithLaptopType = UserType & {
  laptop: LaptopType;
};

export type UserWithBooksType = UserType & {
  books: Array<string>;
};

export type WithCompaniesType = {
  companiens: Array<{ id: number; title: string }>;
};

export function makeHairStyle(u: UserType, power: number) {
  const copy = { ...u, hair: u.hair / 2 };

  return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
  const copy = { ...u, address: { ...u.address, city: city } };
  return copy;
}

export function moveUserToOtherHouse(
  u: UserWithLaptopType & UserWithBooksType,
  house: number
) {
  const copy = { ...u, address: { ...u.address, house: house } };
  return copy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
  const copy = { ...u, laptop: { ...u.laptop, title: laptop } };
  return copy;
}

export function addNewBooksToUser(
  u: UserWithLaptopType & UserWithBooksType,
  newBooks: Array<string>
) {
  const copy = {
    ...u,
    books: [...u.books, ...newBooks],
  };
  return copy;
}

export function updateBook(
  u: UserWithLaptopType & UserWithBooksType,
  booksJS: string,
  booksTS: string
) {
  const copy = {
    ...u,
    books: u.books.map((el) => (el === booksJS ? booksTS : el)),
  };
  return copy;
}

export function removeBook(
  u: UserWithLaptopType & UserWithBooksType,
  booksJS: string
) {
  const copy = {
    ...u,
    books: u.books.filter((el) => (el === booksJS ? null : el)),
  };
  return copy;
}

export const updateCompanyTitle = (
  u: WithCompaniesType,
  id: number,
  title: string
) => {
  const copy = {
    ...u,
    companiens: u.companiens.map((el) => {
      return el.id === id ? { ...el, title: title } : el;
    }),
  };

  return copy;
};
