class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
  }

  encrypt(message, key) {
    if( typeof(message) == 'undefined' || typeof(key) == 'undefined')
      throw 'Error: parameters are mandatory!';

    if(!this.direct){
      message = message.split('').reverse().join('');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let r = '';
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let q = 0, current ='';
    for(let i = 0; i < message.length; i++){
      let mi = a.indexOf(message[i]);
      if(mi == -1){
        current = message[i];
      }else{
        let keySymbol = key[( (q >= key.length) ? q % key.length : q)];
        let keySymbolPosition = a.indexOf(keySymbol);
        current = a[( (a.length + (mi + keySymbolPosition)) % a.length )];
        q++;
      }
      r += current;
    }
    return r;
  }

 decrypt(encryptedMessage, key) {
    if( typeof(encryptedMessage) == 'undefined' || typeof(key) == 'undefined')
      throw 'Error: parameters are mandatory!';

    if(!this.direct){
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let r = '';
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let q = 0, current ='';
    for(let i = 0; i < encryptedMessage.length; i++){
      let mi = a.indexOf(encryptedMessage[i]);
      if(mi == -1){
        current = encryptedMessage[i];
      }else{
        let keySymbol = key[((q >= key.length) ? q % key.length : q)];
        let keySymbolPosition = -a.indexOf(keySymbol);
        current = a[( (a.length + (mi + keySymbolPosition)) % a.length )];
        q++;
      }
      r += current;
    }
    return r;
  }
}

module.exports = VigenereCipheringMachine;
