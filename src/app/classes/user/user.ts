export class User{
    id: number;
    email: string;
    username: string;
    password: string;
    sessionId: string;

    constructor(email: string, username: string, password: string){
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public getEmail(){
        return this.email;
    }
    public getUsername(){
        return this.username;
    }
    public getPassword(){
        return this.password
    }
    public setPassword(pw: string){
        this.password = pw;
    }

    public getSessionId(){
        return this.sessionId;
    }
    public setSessionId(se: string){
        this.sessionId = se;
    }
}