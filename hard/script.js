

function privateInfo() {
    let pii = {
        name: "Carlo",
        ssn: "263421234"
    }

    
    
    return function getName() {
        console.log(pii.name);
        
    }
    
}



let getName = privateInfo()
getName()