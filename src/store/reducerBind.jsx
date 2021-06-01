
export let reducers = [];

export const BindReducer = (reducer , reducer_name)=>{
    if (reducers.find(x=>x.name===reducer_name)){
        throw console.error("Reducer with this name alreade exists");
    }
    else {
        reducers.push({name: reducer_name, use_reducer: reducer});
    }
}

