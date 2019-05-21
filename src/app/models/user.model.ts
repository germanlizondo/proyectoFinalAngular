export class User{
    private _id: string
    private _nickname: string
    private _email: string
    private _img:string
    private _password: string
    private _publicKey: string
    private _privateKey: string
    constructor(){}

    get id(): string{
        return this._id
    }
    set id(id: string) {
        this._id = id;
     }
     get nickname(): string{
        return this._nickname
    }
    set nickname(nickname: string) {
        this._nickname = nickname;
     }
     get img(): string{
        return this._img
    }
    set img(img: string) {
        this._img = img;
     }
     get email(): string{
        return this._email
    }
    set email(email: string) {
        this._email = email;
     }
     get password(): string{
        return this._password
    }
    set password(password: string) {
        this._password = password;
     }
     get privateKey(): string{
        return this._privateKey
    }
    set privateKey(privateKey: string) {
        this._privateKey = privateKey;
     }
     get publicKey(): string{
        return this._publicKey
    }
    set publicKey(publicKey: string) {
        this._publicKey = publicKey;
     }
}