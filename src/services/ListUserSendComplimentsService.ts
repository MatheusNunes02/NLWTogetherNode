import {getCustomRepository} from "typeorm"
// import { UsersRepositories } from "../repositories/UsersRepositories"
import { ComplimentsRepositories} from '../repositories/ComplimentsRepositories'

class ListUserSendComplimentsService {
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentsRepositories.find({
            where:{
                user_sender: user_id,
            }
        })

        return compliments
    }
}

export { ListUserSendComplimentsService }
