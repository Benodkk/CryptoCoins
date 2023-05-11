function useRoundNr(number: number) {
  let returnNumber: string;
  console.log(number);
  let absNumber = Math.abs(number);
  if (absNumber >= 1000 && absNumber < 10000) {
    returnNumber = Number(absNumber.toFixed(2)).toLocaleString();
  } else if (absNumber >= 10000) {
    returnNumber = Number(absNumber.toFixed(0)).toLocaleString();
  } else {
    returnNumber = absNumber.toPrecision(5);
    while (
      (returnNumber.endsWith("0") || returnNumber.endsWith(".")) &&
      returnNumber.indexOf(".") !== -1
    ) {
      returnNumber = returnNumber.substring(0, returnNumber.length - 1);
    }
  }
  return number > 0 ? returnNumber : `-${returnNumber}`;
}

export default useRoundNr;
