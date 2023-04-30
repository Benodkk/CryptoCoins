function useRoundNr(number: number): number {
  let nr: number;

  const str = number.toString();
  if (str.indexOf(".") !== -1) {
    const parts = str.split(".");
    const integerPart = parts[0];
    let decimalPart = parts[1];

    while (decimalPart.length > 0 && decimalPart.charAt(0) === "0") {
      decimalPart = decimalPart.substr(1);
    }

    const result = parseFloat(`${integerPart}.${decimalPart}`).toPrecision(4);
    nr = parseFloat(result);
  } else {
    nr = parseFloat(number.toPrecision(4));
  }

  return nr;
}

export default useRoundNr;
