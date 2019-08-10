export class Repository {
    name : string;
    description : string;
    stargazers_count : number; 
    open_issues_count : number; 
    owner : Owner;
    created_at : string;
    constructor(){

    }
}

export class Owner {
    login : string;
    avatar_url : string;
    constructor(){

    }
}