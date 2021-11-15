import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

interface IRequestTag{
    name:string;
}


class CreateTagService{
    async execute({name}: IRequestTag){
        const tagsRepositories = getCustomRepository(TagRepositories);

        if(!name){
            throw new Error("Incorrect name.");
        }

        //Select * from TAGS WHERE NAME = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists){
            throw new Error("Tag Already Exists!");
        }


        const tag = tagsRepositories.create({
            name
        })
            
        await tagsRepositories.save(tag)

        return tag;
    }
}

export { CreateTagService }