const petNameInput = document.getElementById("petName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petNameInput = _petName
    this.ownerNameInput = _ownerName
    this.speciesInput = _species
    this.breedInput = _breed
  }
}

const form = document.getElementById("petForm")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("INVIO FORM")

  const anotherPet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )
  console.log("Nuovo animale", anotherPet)
  form.reset()
})
