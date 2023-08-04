//функция для того чтобы сделать первую букву заглавной
export const Capitalize = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}
