import type {ModelCommentType} from "../models/ModelCommen.ts";

const endpointComments=import.meta.env.VITE_API_BASE_URL +'/comments'
export const loadPosts=async ():Promise<ModelCommentType[]>=>{
    return await fetch(endpointComments)
        .then(value=>value.json()
        )
}
