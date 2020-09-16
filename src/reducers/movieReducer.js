
const movieReducer = (movieCollection = [], action) => {
    switch(action.type) {

        case "ADD_TO_COLLECTION":
            return movieCollection = [...movieCollection , action.payload]
            
        case "DELETE_MOVIE":

            return movieCollection = movieCollection.filter((item, index) => index !== action.payload)
                 
        
        case "CLEAR_MOVIES":
        return movieCollection= []
       
        default:
            return movieCollection
    
    }
}
export default movieReducer