

function outerFunction() {
    let pii = {
        name: "Carlo",
        ssn: "263421234"
    }

    function getName() {
        return pii.name;
        
    }
    
    return getName
    
}


let getName = outerFunction()
let name = getName();
