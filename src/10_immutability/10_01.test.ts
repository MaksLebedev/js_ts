import {
  addNewBooksToUser,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  updateBook,
  updateCompanyTitle,
  UserType,
  UserWithBooksType,
  UserWithLaptopType,
  WithCompaniesType,
} from "./10_01";
import { makeHairStyle } from "./10_01";
import { upgradeUserLaptop } from "./10_01";

test("refernce type test", () => {
  let user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
    },
  };
  const awesomeUser = makeHairStyle(user, 2);

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
});

test("change address", () => {
  let user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
  };

  const movedUser = moveUser(user, "Saint-Petesburg");

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.city).toBe("Saint-Petesburg");
});

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
  };

  const movedUserLaptop = upgradeUserLaptop(user, "Macbook");

  expect(user).not.toBe(movedUserLaptop);
  expect(user.address).toBe(movedUserLaptop.address);
  expect(user.laptop).not.toBe(movedUserLaptop.laptop);
  expect(movedUserLaptop.laptop.title).toBe("Macbook");
});

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["CSS", "HTML", "JS", "React"],
  };

  const movedUserLaptop = moveUserToOtherHouse(user, 99);

  expect(user).not.toBe(movedUserLaptop);
  expect(user.books).toBe(movedUserLaptop.books);
  expect(user.laptop).toBe(movedUserLaptop.laptop);
  expect(user.address).not.toBe(movedUserLaptop.address);
  expect(movedUserLaptop.address.house).toBe(99);
});

test("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["CSS", "HTML", "JS", "React"],
  };

  const userCopy = addNewBooksToUser(user, ["ts", "rest api"]);

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[4]).toBe("ts");
  expect(userCopy.books[5]).toBe("rest api");
});

test("update js to ts", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["CSS", "HTML", "JS", "React"],
  };

  const userCopy = updateBook(user, "JS", "TS");

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe("TS");
});

test("remove js book", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    books: ["CSS", "HTML", "JS", "React"],
  };

  const userCopy = removeBook(user, "JS");

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe("React");
});

test("is a job in companies", () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: "Minsk",
      house: 12,
    },
    laptop: {
      title: "Zenbook",
    },
    companiens: [
      {
        id: 1,
        title: "Епам",
      },
      {
        id: 2,
        title: "IT-INCUBATOR",
      },
    ],
  };

  const userCopy = updateCompanyTitle(user, 1, "EPAM") as UserWithLaptopType & WithCompaniesType;

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.companiens).not.toBe(userCopy.companiens);
  expect(userCopy.companiens[0].title).toBe("EPAM");
});
