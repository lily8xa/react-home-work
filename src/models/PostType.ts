export type ReactionsType= {
	dislikes: number;
	likes: number;
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
