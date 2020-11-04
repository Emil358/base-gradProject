export const getDate = (date) => {
  const date = new Date(date);
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}
