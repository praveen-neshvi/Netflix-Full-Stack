const AuthReducer = (state,action) => {
    switch(action.type){
        case "LOGIN_START" : 
        return{
            user:null,
            isFecting:true,
            error: false,
        };

        case "LOGIN_SUCCESS" : 
        return{
            user:action.payload,
            isFecting:false,
            error: false,
        };

        case "LOGIN_FAILURE" : 
        return{
            user:null,
            isFecting:false,
            error: true,
        };
        default:
            return {...state};
    }
}

export default AuthReducer;