import { User } from './user.model';

export class Messsage{
    private _content:string;
    private _author: User;
    private _date :Date;

    constructor(){
        this._date = new Date();
    }

    get content(): string{
        return this._content
    }
    set content(content: string) {
        this._content = content;
     }

     get author():User{
        return this._author;
    }
    set author(author: User) {
       this._author = author;
    }

    get date():Date{
        return this._date;
    }
    set date(date: Date) {
       this._date = date;
    }

}