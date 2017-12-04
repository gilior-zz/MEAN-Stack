export class Message {
    constructor(public  content: string,
                public  userName: string,
                public  id?: string,
                public  userId?: string) {

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