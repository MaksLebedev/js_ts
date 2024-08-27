test("Should take old men older tgan 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const oldAges = ages.filter((age) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});
