// reducer takes in two things
// 1. the action ( info about what happened)
// 2. copy of current state


function posts(state=[], action) {
    console.log('the post will change');
    console.log(state, action);

    // switch(action) {
    //     if(action == "INCREMENT_LIKES") {

    //     }
    // }
    return state;
}

export default posts;

