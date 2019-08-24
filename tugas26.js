var arrayf = () => {
  lineUp = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  scan = isFinite([lineUp]);
  if (scan === false) {
    for (let i = 0; i < lineUp.length; i++) {
      console.log('Angka ' + lineUp[i] + ' NOT Infinity.')
    }
  } else {
    console.log('Angka ' + lineUp[i] + ' Infinity.')
  }
  return arrayf;
}
arrayf();