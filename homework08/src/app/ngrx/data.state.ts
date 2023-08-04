
import { Article } from "../models/article.model";


export interface DataState {
    isLoading: boolean;
    isSuccess: boolean;
    articalist: Article[];
    error:string;
}