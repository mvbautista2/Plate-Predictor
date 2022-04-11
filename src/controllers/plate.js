class Plate {
  constructor(numberPlate) {
    this.numberPlate = numberPlate;
  }
  search(lastDigitPlate, day, timeSearch) {
    if (this.verifyTime(timeSearch)) {
      if (pastRules[weekDays[day]].digits.includes(lastDigitPlate)) {
        return `The number plate ${this.numberPlate} can not circulate in the consulted schedule`;
      }
      return `The number plate ${this.numberPlate} can circulate in the consulted schedule`;
    } else {
      return `The number plate ${this.numberPlate} can circulate in the consulted schedule`;
    }
  }

  verifyTime(timeSearch) {
    return (
      (timeSearch >= pastRules.Hours.FirstMin &&
        timeSearch <= pastRules.Hours.FirstMax) ||
      (timeSearch >= pastRules.Hours.SecondMin &&
        timeSearch <= pastRules.Hours.SecondMax)
    );
  }
}

function main() {
  let numberPlate = document.getElementById("numberPlate").value;
  let dateSearch = document.getElementById("dateSearch").value;
  let timeSearch = document.getElementById("timeSearch").value;
  const plate = new Plate(numberPlate);
  const lastDigitPlate = parseInt(
    plate.numberPlate.charAt(plate.numberPlate.length - 1)
  );
  dateSearch = new Date(dateSearch);
  const day = parseInt(dateSearch.getDay());

  numberPlate == "" || dateSearch == "Invalid Date" || timeSearch == ""
    ? swal({
        title: "Empty fills",
        text: "Please, you have to fill all the fields to search",
        icon: "warning",
      })
    : !validateNumberPlate(numberPlate)
    ? swal({
        title: "Incorrect Number Plate",
        text: "Please, you have to add a valid number plate, e.g. ABC-1234",
        icon: "warning",
      })
    : swal({
        title: "The result is:",
        text: plate.search(lastDigitPlate, day, timeSearch),
        icon: "success",
      });
}
