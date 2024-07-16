function calculateAge(year, callback) {
    setTimeout(() => {
        let age = 2024 - year
        callback(age)
    }, 2000)
}

function canVote(age, callback) {
    setTimeout(() => {
        if (age > 18) {
            callback(true)
        } else {
            callback(false)
        }
    }, 3000)
}

function provideVoterId(isEligibleForVote, callback) {
    setTimeout(() => {
        if (isEligibleForVote == true) {
            callback("Here is your VoterId")
        } else {
            callback("Sorry, Kid")
        }
    }, 4000)
}

let personYear = 1988
calculateAge(personYear, function (personAge, err) {
    console.log(personAge)
    if (err) {
        canVote(personAge, function (isEligibleForVote) {
            console.log(isEligibleForVote)
            provideVoterId(isEligibleForVote, function (voterId) {
                console.log(voterId)
                provideVoterId(isEligibleForVote, function (voterId, err) {
                    console.log(voterId)
                    if (!err) {
                        provideVoterId(isEligibleForVote, function (voterId) {
                            console.log(voterId)
                            provideVoterId(isEligibleForVote, function (voterId) {
                                console.log(voterId)
                                provideVoterId(isEligibleForVote, function (voterId) {
                                    console.log(voterId)
                                })
                            })
                        })
                    } else {
                        throw "Error, CODE 12"
                    }

                })
            })
        })
    } else {
        throw "Error, code 1"
    }

})

console.log("Other Lines")

// Callback Hell

// Promise

function foo(){
    
}