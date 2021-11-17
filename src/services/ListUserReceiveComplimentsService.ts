import { getCustomRepository } from 'typeorm';
// import { UsersRepositories } from "../repositories/UsersRepositories"
import { ComplimentsRepositories} from '../repositories/ComplimentsRepositories'




class ListUserReceiveComplimentsService {
    
    async execute(user_id: string){
        // const usersRepositories = getCustomRepository(UsersRepositories);
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                 user_receiver: user_id
            },
            relations:["userSender","userReceiver","tag"]
        })

        return compliments
    }
}

export { ListUserReceiveComplimentsService }