export class Compare  {
  compare(text1, text2) {

    if( text1 === null && text2 === null ) return true;
    else if( text1 === null ) return false;
    else if( text2 === null) return false;
    else if( typeof text1 !== 'string' || typeof  text2 !== 'string'   ) return false;
    return text2.toLowerCase().trim() === text1.toLowerCase();
  }
}
