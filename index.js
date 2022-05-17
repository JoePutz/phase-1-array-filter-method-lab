//function findMatching(drivers, name) {
//    for (const user of array) {
//        if (user === "string") {
//            return user;
//        }
//    }
//}

function findMatching(drivers, name) {
    let match = drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());
    return match;
}


function fuzzyMatch(drivers, name) {
    let match = drivers.filter(driverName => driverName.slice(0, name.length) === name);
    return match;
}

//function fuzzyMatch(drivers, name){
//    const fuzzyDrivers = drivers.filter(function(person){
//        return person.slice(0) == name.slice(0);
//    });
//    return fuzzyDrivers;
//}

//function matchName(drivers, name) {
//    let match = drivers.filter(driverName.name => driverName.name === name);
//    return match;
//}

function matchName(object, string) {
    return object.filter(driver => driver.name === string);
}