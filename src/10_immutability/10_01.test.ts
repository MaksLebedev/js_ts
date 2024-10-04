import { UserType } from "./10_01";

function makeHairStyle(u: UserType, power: number) {
  const copy = { ...u, hair: u.hair / 2 };

  return copy;
}

test("refernce type test", () => {
  let user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      title: "Minck",
    },
  };
  const awesomeUser = makeHairStyle(user, 2);

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
});
