import { getCities, getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (currentPet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === currentPet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findWalkerCity = (currentPetWalker, citiesArray) => {
    let walkerCity = null

    for (const city of cities) {
        if (currentPetWalker.cityId === city.id) {
            walkerCity = city
        }
    }

    return walkerCity
}


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentWalkerCity = findWalkerCity(currentPetWalker, cities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentWalkerCity.name}
            </li>`
        
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


