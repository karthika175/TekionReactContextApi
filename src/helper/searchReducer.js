import { AiFillExclamationCircle } from "react-icons/ai";




export const initialState={

    // cart:[],

    searchKey:''

    

}

const Reducer = (initialState,action) => {

   switch(action.type){

    case "SEARCH":

        return{

            ...initialState,

            searchKey:action.payload

        }

    default: return initialState;

        break;

   }

}

export default Reducer;