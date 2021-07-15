let initialState={
    
    taskList:[]
}
function todoReducer(state=initialState,action){
    
    switch(action.type){
        
        case "add_list":
             let newTask=[...state.taskList,action.payload]
            console.log(newTask);
            return{
                taskList:newTask
            }
        case "delete_list":
            let delTask=state.taskList.filter((obj)=>{
                console.log(obj.id+" "+action.payload);
                return obj.id!=action.payload
            })
            console.log(delTask);
            return{
                taskList:delTask
            }
        default:return state
        
    }
}
export default todoReducer