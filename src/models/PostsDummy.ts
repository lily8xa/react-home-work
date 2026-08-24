export type PostDummyJsonType={
    posts:PostDummyType[];
    total:number;
    skip:number;
    limit:number;
}
type ReactionsType={
    likes:number;
    dislikes:number
}

export type PostDummyType={
    id:string;
    title:string;
    body:string;
    tags:string[];
    reactions:ReactionsType;
    views:number;
    userId:number;
}
