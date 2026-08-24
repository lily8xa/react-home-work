export interface userItem {
	fullName: string;
	id: number;
	username: string;
}

export type CommentDummyType= {
	id: number;
	postId: number;
	body: string;
	user: userItem;
	likes: number;
}
export type CommentDummyJsonType={
    comments:CommentDummyType[];
    total:number;
    skip:number;
    limit:number;
}
