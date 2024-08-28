type ManType = {
  name: string;
  age: number;
  lessons: Array<{ title: string }>;
  address: {
    street: {
      title: string;
    };
  };
};

test("", () => {
  let man = {
    name: "Dimych",
    age: 32,
    lessons: [{ title: "1" }, { title: "2" }],
  };

  const { name, age, lessons } = man;

  expect(age).toBe(32);
});
