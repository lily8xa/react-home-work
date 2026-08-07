import type {RootPostType} from "../models/postModels.ts";

const endpointPost=import.meta.env.VITE_API_BASE_URL + '/posts'

export const loadPosts=async ():Promise<RootPostType[]>=>{
    return await fetch(endpointPost)
        .then(value=>value.json()
        )
}
