function collectStrig(object){
    const collector = []

    function helper(obj){
        for(let key in obj){
            if(typeof obj[key] === "string"){
                collector.push(obj[key])
            } else if (typeof obj[key] === "object"){
                helper(obj[key])
            }
        }
    }

    helper(object)
    
    return collector

}