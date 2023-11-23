const dogs = [ { name: "Cheddar", breed: "Corgi", owner: "Holt" }, { name: "Toto", breed: "Terrier", owner: "Dorothy" }, { name: "Susan", breed: "Corgi", owner: "Lizzie" } ]
function myName(element) {
    return (element === "Susan")
}

dogs.find(myName)
