
const INITIAL_STATE = {
    users : [{
        name:"caryy",
        email:"carry@gmail.com"
    },
    {
        name:"basit",
        email:"bas@gmail.co"
    }
 ],
 
 }
 
 
 export default (state = INITIAL_STATE,action) => {
     switch (action.type){
         case "SETDATA":
             return({
                 ...state,
                  users:[...state.users,action.data]
             })
             default:
                 return state;
     }
    
 }