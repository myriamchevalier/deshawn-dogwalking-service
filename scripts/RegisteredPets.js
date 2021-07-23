import { getPets , getWalkers } from "./database.js"

// Add event listener --> when pet clicked on, shows who they are walked by

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target 
        if (itemClicked.id.startsWith("pet")) {
            // need to store the id in different array and name it
            const [,petId] = itemClicked.id.split("--")
            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    
                    for (const walker of walkers) {
                        if (pet.walkerId === walker.id){
                            window.alert(`${pet.name} is being walked by ${walker.name}`)
                        }
                    }
                }

            }
        }
    }
)
const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

