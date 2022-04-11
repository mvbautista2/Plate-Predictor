function validateNumberPlate(numberPlate) {
  const patternPlate = new RegExp(/^([A-Za-z]{3})-+[0-9]{4}$/);
  return patternPlate.test(numberPlate);
}
