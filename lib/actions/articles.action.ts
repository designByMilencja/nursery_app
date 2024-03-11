"use server"
import {connectToDatabase} from "@/lib/mongoose";
import Article from "@/models/article.model";
import Tag from "@/models/tag.model";
import {CreateArticleParams, GetArticlesParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";

export async function getArticles(params: GetArticlesParams) {
    try {
        connectToDatabase();
        const articles = await Article.find({})
            .populate({path: 'tags', model: Tag})
            .sort({createdAt: -1})
        return {articles}
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

export async function createArticle(params: CreateArticleParams) {
    try {
        await connectToDatabase()
        const {title, description, image, tags, path} = params;
        // create the article
        const article = await Article.create({
            title, description, image,
        });
        const tagDocuments = []
        // create the tags or get them if they already exist
        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {
                    name: {$regex: new RegExp(`^${tag}$`, "i")},
                },
                {
                    $setOnInsert: {
                        name: tag,
                    },
                    $push: {
                        articles: article._id,
                    },
                },
                {upsert: true, new: true},
            );
            tagDocuments.push(existingTag._id);
        }
        await Article.findByIdAndUpdate(article._id, {
            $push: {
                tags: {$each: tagDocuments},
            },
        });
        revalidatePath(path)
    } catch (e) {
        console.log('error in create article')
    }
}
