import { User } from './user.model';
import { Messsage } from './message.model';

export class Chat{
    private _id: string
    private _users: User[] = []
    private _messages: Messsage[] = []

    constructor(){}

    addUser(user:User){
        this._users.push(user);
    }

    addMessage(message:Messsage){
        this._messages.push(message);
    }

    get id(): string{
        return this._id
    }
    set id(id: string) {
        this._id = id;
     }

     get users():User[]{
         return this._users;
     }
     set users(users: User[]) {
        this._users = users;
     }

     get messages():Messsage[]{
        return this._messages;
    }
    set messages(users: Messsage[]) {
       this._messages = users;
    }
}