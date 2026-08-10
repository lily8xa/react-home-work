type ReactionsType={
    likes:number;
    dislikes:number;
}
export type PostType={
    id:number;
    title:string;
    body:string;
    tags:string[];
    reactions:ReactionsType;
    views:number;
    userId:number;
}
export type JsonPostType={
    posts:PostType[]
    total: number;
    skip: number;
    limit: number;
}
