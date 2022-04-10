export class Quote {
    public votesUp:number
    public votesDown:number
    constructor(public name:string, public Author:string,public message:string, public date:any){
        this.votesUp =0;
        this.votesDown =0;

    }
}
