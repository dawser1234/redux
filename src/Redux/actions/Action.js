import { add } from "../const/Const"

export const AddTask=(ID,desc,Done)=>{
    return {
        type:add,payload:{id:ID,description:desc,isdone:Done}

    }
}