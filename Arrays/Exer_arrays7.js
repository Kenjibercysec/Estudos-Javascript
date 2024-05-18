// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies

.filter(m => m.year === 2018 && m. rating >= 4)
.sort((a, b) => a. rating - b. rating)
.reverse()
.map(m => m.title)

console.log(titles);