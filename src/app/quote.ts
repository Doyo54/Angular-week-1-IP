export class Quote {
    public votesUp:number
    public votesDown:number
    public length:any
    constructor(public name:string, public Author:string,public quote:string, public date:Date){
        this.votesUp =0;
        this.votesDown =0;
    }
}
