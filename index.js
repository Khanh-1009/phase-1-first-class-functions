function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction (){
    return function withname(){
    }
}

function returnsAnAnonymousFunction (){
    return function(){
        
    }
}