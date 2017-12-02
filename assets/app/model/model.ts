export class Message {
    constructor(private  content: string,
                private  userName: string,
                private  id?: string,
                private  userId?: string) {

    }
}

export  class User{
    constructor(
        private  email:string,
        private  pwd:string,
        private  firstName?:string,
        private  lastName?:string

    ){

    }
}