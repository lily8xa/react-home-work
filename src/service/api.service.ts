import type {UserType} from "../models/UserType.ts";
import {dummyUrls, urls} from "../constants/urls.ts";
import type {PostType} from "../models/PostType.ts";
import type {CommentType} from "../models/CommentType.ts";
import type {UserDummyJsonType, UserDummyType} from "../models/UsersDummy.ts";

export const userService={
    getUsers:async():Promise<UserType[]>=>{
        return await fetch(urls.users.allUsers)
            .then(value=>value.json())
    }

}
export const postService={
    getPosts:async():Promise<PostType[]>=>{
        return await fetch(urls.posts.allPosts)
            .then(value=>value.json())
    }
}
export const commentService={
    getComments:async():Promise<CommentType[]>=>{
        return await fetch(urls.comments.allComments)
            .then(value=>value.json())

}
}

export const userDummyService = {
    getDummyUsers: async (): Promise<UserDummyType[]> => {
        const response:UserDummyJsonType = await fetch(dummyUrls.dummyUsers.allDummyUsers)
            .then(value =>value.json() )
        return response.users


    }
}
