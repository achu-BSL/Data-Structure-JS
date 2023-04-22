function collectString(obj){
    const collector = []
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            collector.push(obj[key])
        } else if (typeof obj[key] === 'object'){
            collector = collector.concat(collectString(obj[key]))
        }
    }

    return collector
}


function collect(obj){
    let collector = {}
    for(let key in obj){
        if(typeof obj[key] === 'String'){
            collect[key] = obj[key]
        } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            collect(obj[key])
        }
    }
}










