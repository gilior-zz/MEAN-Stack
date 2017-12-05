export class Message {
    constructor(public  content: string,
                public  userName: string,
                public  id?: string,
                public  userId?: string) {

    }
}

export class User {
    constructor(public  email: string,
                public  pwd: string,
                public  firstName?: string,
                public  lastName?: string,
                public  id?: string) {

    }
}