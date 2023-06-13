const getInitials = (firstName, lastName) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`
  return initials.toUpperCase()
}

console.log(getInitials('Roger', 'Waters')) // Output: RW
