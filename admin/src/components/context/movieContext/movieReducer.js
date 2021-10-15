const MovieReducer = (state,action) => {
    switch(action.type){
        case "GET_MOVIES_START" : 
        return{
            movies:[],
            isFecting:true,
            error: false,
        };

        case "GET_MOVIES_SUCCESS" : 
        return{
            movies:action.payload,
            isFecting:false,
            error: false,
        };

        case "GET_MOVIES_FAILURE" : 
        return{
            movies:[],
            isFecting:false,
            error: true,
        };

        case "DELETE_MOVIE_START" : 
        return{
            ...state,
            isFecting:true,
            error: false,
        };

        case "DELETE_MOVIE_SUCCESS" : 
        return{
            movies:state.movies.filter((movie)=> movie.id != action.playload),
            isFecting:false,
            error: false,
        };

        case "DELETE_MOVIE_FAILURE" : 
        return{
            ...state,
            isFecting:false,
            error: true,
        }

        default:
            return {...state};
    }
}

export default MovieReducer;