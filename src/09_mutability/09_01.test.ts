function icreaseAge(u: UserType) {
  u.age++;
}

type UserType = {
  name: string;
  age: number;
};

test("array test", () => {
  var user: UserType = {
    name: "Dimych",
    age: 32,
  };

  icreaseAge(user);

  const superman = user
  superman.age = 1000

  expect(user.age).toBe(1000);

  
});


