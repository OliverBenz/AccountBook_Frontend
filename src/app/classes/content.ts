export class Content {
    title: String;
    content: String;
    order: number;

    constructor(title: String, content: String, order: number){
        this.title = title;
        this.content = content;
        this.order = order;
    }

    public getTitle(){
        return this.title;
    }
    public getContent(){
        return this.content;
    }
    public getOrder(){
        return this.order;
    }
}