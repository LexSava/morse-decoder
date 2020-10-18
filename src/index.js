const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = "";
  for(let i = 0; i < expr.length; i += 10){
      if(expr.charAt(i) === '*'){
          result += " ";
          continue;
      }
      let newString = "";
       for(let j = i ; j !== i + 10 ; j += 2){
          if(expr.charAt(j) === '0'){ 
              continue;
          }else if(expr.charAt( j + 1) === '1'){
            newString +="-";
          } else {
            newString +=".";
          }
          
      }
      result += MORSE_TABLE[newString];
  }
  return result;
}
module.exports = {
    decode
}
