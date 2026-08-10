
export type CommentType={
    comments: RootType[];
    total: number;
    skip: number;
    limit: number;
}
type UserNameType={
    id:number;
    username: string;
    fullName: string;

}
export type RootType ={
    id: number;
    body: string;
    postId: number;
    likes: number;
    user:UserNameType
}

