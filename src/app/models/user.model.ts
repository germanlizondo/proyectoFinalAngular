export class User{
    private _id: string
    private _nickname: string
    private _email: string
    private _password: string
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
}