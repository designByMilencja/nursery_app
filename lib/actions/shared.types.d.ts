import {IUser} from "@/models/user.model";

export interface GetArticlesParams {
    page?: number;
    pageSize?: number;
    searchQuery?: string;
    filter?: string;
}
export interface CreateArticleParams {
    title: string;
    description: string;
    image: string;
    tags: string[];
    path: string;
}

export interface UpdateUserParams {
    id: string;
    updateData: Partial<IUser>;
    path: string;
}
export interface DeleteUserParams {
    id: string;
}
