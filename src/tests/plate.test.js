const Plate = require("../controllers/plate");

describe("plate-predictor", () => {
  test("Should return can circulate", () => {
    let numberPlate = "ABC1234";
    const result = new Plate(numberPlate);
    let dateSearch = "2022-04-12";
    dateSearch = new Date(dateSearch);
    let timeSearch = "05:00";
    expect(
      "The number plate ABC1234 can circulate in the consulted schedule"
    ).toMatch(
      result.search(
        parseInt(numberPlate.charAt(numberPlate.length - 1)),
        parseInt(dateSearch.getDay()),
        timeSearch
      )
    );
  });
  test("Should return can not circulate", () => {
    let numberPlate = "ABC1234";
    const result = new Plate(numberPlate);
    let dateSearch = "2022-04-12";
    dateSearch = new Date(dateSearch);
    let timeSearch = "18:30";
    expect(
      "The number plate ABC1234 can not circulate in the consulted schedule"
    ).toMatch(
      result.search(
        parseInt(numberPlate.charAt(numberPlate.length - 1)),
        parseInt(dateSearch.getDay()),
        timeSearch
      )
    );
  });
  test("Should return can not circulate", () => {
    let numberPlate = "ABC1233";
    const result = new Plate(numberPlate);
    let dateSearch = "2022-04-12";
    dateSearch = new Date(dateSearch);
    let timeSearch = "07:00";
    expect(
      "The number plate ABC1233 can not circulate in the consulted schedule"
    ).toMatch(
      result.search(
        parseInt(numberPlate.charAt(numberPlate.length - 1)),
        parseInt(dateSearch.getDay()),
        timeSearch
      )
    );
  });
  test("Should return can circulate", () => {
    let numberPlate = "ABC1239";
    const result = new Plate(numberPlate);
    let dateSearch = "2022-04-12";
    dateSearch = new Date(dateSearch);
    let timeSearch = "07:00";
    expect(
      "The number plate ABC1239 can circulate in the consulted schedule"
    ).toMatch(
      result.search(
        parseInt(numberPlate.charAt(numberPlate.length - 1)),
        parseInt(dateSearch.getDay()),
        timeSearch
      )
    );
  });
});
