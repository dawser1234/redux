import { add } from "../const/Const"

const initialstate={
    data: [{
        id:0,
        description:"cyrine",
        isdone:false
    },
    { id:1,
        description:"dawser",
        isdone:true},
        { id:2,
            description:"hamza",
            isdone:true}
        
        ]
}



export const TodoReducers =(state=initialstate,action)=>{
    switch (action.type) {
        case add:
          return {
            ...state,
            data: [...state.data, { ...action.payload }],
          };
        default:
          return state;
      }
    };