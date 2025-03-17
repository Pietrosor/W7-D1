const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const age = document.getElementById("age")
const address = document.getElementById("address")

class User {
  constructor(_firstName, _lastName, _age, _address) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.address = _address
  }
}

const form = document.getElementById("userForm")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("INVIO FORM")
  const user1 = new User(
    firstName.value,
    lastName.value,
    age.value,
    address.value
  )
  console.log("CONTATTO SALVATO ", user1)
  form.reset()
})

const ageDifference = function (otherUser) {
  if (this.age > otherUser.age) {
    return this.firstName, "è più grande di ", otherUser.firstName
  } else if (this.age < otherUser.age) {
    return this.firstName, " è più piccolo di ", otherUser.firstName
  } else {
    return this.firstName, " ha la stessa età di ", otherUser.firstName
  }
}
