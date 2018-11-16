export class Account{
    id: number;
    website: string;

    username: string;
    password: string;
    
    date: string;
    
    info: string;
    likes: number;
    dislikes: number;
    
    rating: number;

    constructor(id: number, website: string, username: string, password: string, date: string, info: string, likes: number, dislikes: number ){
        this.id = id;
        this.website = website;

        this.username = username;
        this.password = password;

        this.date = date;
        
        this.info = info;
        this.likes = likes;
        this.dislikes = dislikes;
    }

    getId(){
        return this.id;
    }
    setId(id: number){
        this.id = id;
    }
    getWebsite(){
        return this.website;
    }
    setWebsite(website: string){
        this.website = website;
    }
    getUsername(){
        return this.username;
    }
    setUsername(username: string){
        this.username = username;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password: string){
        this.password = password;
    }
    getDate(){
        return this.date;
    }
    setDate(date: string){
        this.date = date;
    }
    getInfo(){
        return this.info;
    }
    setInfo(info: string){
        this.info = info;
    }
    getLikes(){
        return this.likes;
    }
    setLikes(likes: number){
        this.likes = likes;
    }
    getDislikes(){
        return this.dislikes;
    }
    setDislikes(dislikes: number){
        this.dislikes = dislikes;
    }
    getRating(){
        return this.rating;
    }
    setRating(rating: number){
        this.rating = rating;
    }
}