import { Injectable } from '@angular/core';
import {Buffer} from 'buffer/';
import * as crypto from "crypto-browserify";

@Injectable({
  providedIn: 'root'
})
export class RsaService {
  private privateKey: string;
  private publicKey: string;
  constructor() { 
this.publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn1Y4O3p+D+bgpaZBQA1i\nQBIPfvsvFJfOVK82tfe6cTQRsQNGuSuyvuE7uaZkTk6/lzUW13SpBwIvTkSLs7oF\namw+FOXBbFyxuA52YChw+Ips9WoCqQJROtp7xsds4/Q+ho5JELb90O3YgIM6l9RW\noIvjzAtQyXYJnWXaz+pe0IwnSMUc75a41zxp5Uea2p6/MBrk1cJiMLLW8glVqQn4\n2Wz6tj+cjDyUmod5/QctlKNcPMUmQRfc5lMnlUJMxOcZ12Frn07PvbdIJ8VZ4ViG\nuvx/F7OGC0CWePwloEQcrz/BC5IBICPiuT8NgSd8+OOksjws8F6uc8440B8yxNP4\nvQIDAQAB\n-----END PUBLIC KEY-----\n";
this.privateKey ="-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAn1Y4O3p+D+bgpaZBQA1iQBIPfvsvFJfOVK82tfe6cTQRsQNG\nuSuyvuE7uaZkTk6/lzUW13SpBwIvTkSLs7oFamw+FOXBbFyxuA52YChw+Ips9WoC\nqQJROtp7xsds4/Q+ho5JELb90O3YgIM6l9RWoIvjzAtQyXYJnWXaz+pe0IwnSMUc\n75a41zxp5Uea2p6/MBrk1cJiMLLW8glVqQn42Wz6tj+cjDyUmod5/QctlKNcPMUm\nQRfc5lMnlUJMxOcZ12Frn07PvbdIJ8VZ4ViGuvx/F7OGC0CWePwloEQcrz/BC5IB\nICPiuT8NgSd8+OOksjws8F6uc8440B8yxNP4vQIDAQABAoIBAAY9E/qQMztgKM+T\nkN53J6+mhWDNaOx/fR6ntZauWmhwR3kMzcoWQetjWjlMoITIZIwBEiHheXTCyyNf\nX7DryaZ/Ency/73Ea1jviAb/zlyM3vNE8VG4u4F4aHxB9qt+NqyCCa5T2+BAT8fI\nW5TyRWoH0CV/E+yvaHT3NfgKDyhPJLGuzYUpi/qNOglGyoF87qvriG4JjR9dXFux\n2+jm7h92mhUgouP4Byk1IQs5YMgLWP49NX1Bh1hP7eiyAsgE8S3UmfY4PaqLvp03\nWIL/hZYe95msLbNannyWOQtu58EUn3gThjZe5fxgo9gvHzowBEiZDjiTkcDrEhyo\n1RjZy2kCgYEAy7mW+8j/v0LFJWTmjq/2s5DwlxR4VhNdr2EE7dKQtjq33n06st9N\nbeEHamhh5fPE0ON9DBRP845dYHDP6Z9/dGuoEfH+ZzBARDNCaJYWurCOzkWPp/87\nNBeS2KS8ZmcZt4oFpNo6g5QrxFkr/m17dX5yJcjRRCIzLcIEbOeeCbMCgYEAyDjV\nN7ONe6pLT9MaPDngf0P1ZItq2r0cHa8f+wRIRcXxahE9lAQJxqBUiajBnOLm0jlW\nGLtYUB5eHHraMkH3MJ4HMEq5ksZj8bOq4EymgKc0pvrd5OCwzGlSZCmgiP1JTK2+\n0DY8vZiKyJM8AIJNzJJu9aHi+1SEMZd895RK288CgYEAgoi//USk2d/mgjdMo1CM\nOjI8dhFfqYdvF9iKV/f7UUf+WEjVO5do/WaaYcvQLo8rJM0eaob5U418tzaRgZf5\nCpeQcS8lWujHxOszOeAxYB2Q4wofKf2X6aDRLo8fSF33VGrTgvVxWK2v/XdFgRiV\naotCiINL0uQ29rLCMyWVVZECgYBq6P3g2j0n1UyVeRE/K2BWVEFJyK/r0KKcrxAS\nhrzYlNNNYZtR174okx/QyY1oajf59KemWRLU5QI3jtnHkDWffiI0hRIF720aeGc7\nkXIurBmPN9EYD2oYG/zkgt23iBeFnBiRMQTJ8BPa+dNGKk3EeERLYH/E1+ImYM9X\nm5VFPQKBgBd+brIRODVDCtVT2xCt1ijYm3A9xXRnZV2bfXopHae52er7pnJTBcnL\n8tch3mlzuYmwq2szDDicXUyEMe9v2tXTZeb7k12KAQzxGOzcjK6b0Y8qZE0kTsfy\n+XJdco9CS9QDTTUv+H04DWqKr8zI0hluqkayOf1rpouoTaK64zFK\n-----END RSA PRIVATE KEY-----\n";
    this.publicKey.replace("-----BEGIN PUBLIC KEY-----\n", "");
    this.publicKey.replace("-----END PUBLIC KEY-----", "");
    this.privateKey.replace("-----BEGIN PUBLIC KEY-----\n", "");
    this.privateKey.replace("-----END PUBLIC KEY-----", "");
  }


 
}
