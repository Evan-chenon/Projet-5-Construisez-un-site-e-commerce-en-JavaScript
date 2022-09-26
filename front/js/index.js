console.log("je suis sur la page index")

/**fetch("http://localhost:3000/api/products")
  .then(function (res) {
    console.log(res)
    if (res.ok === true) {
      return res.json()
    }
  })
  .then(function (kanaps) {
    console.log(kanaps)
    console.log(kanaps[3].name)
    kanaps.forEach(function (kanap) {
      console.log(kanap.name)
    })
  })

const anchor = document.createElement("a")
anchor.href = "http://localhost:3000/images/kanap01.jpeg"
anchor.text = "Un canapé Bleu deux places"

const items = document.querySelector("#items")
if (items) {
  items.appendChild(anchor)
}**/

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => addProducts(data))

function addProducts(data) {
  
  data.forEach((Kanap) => {
    console.log("Kanap: ", Kanap)

    //const _id = data[0]._id
    //const imageUrl = data[0].imageUrl
    //const altTxt = data[0].altTxt
    //const name = data[0].name
    //const description = data[0].description

    const { _id, imageUrl, altTxt, name, description } = Kanap
    const anchor = makeAnchor(_id)
    const article = document.createElement("article")
    const image = makeImage(imageUrl, altTxt)
    const h3 = makeh3(name)
    const p = makeParagraph(description)

    appendElementsToArticle(article, image, h3, p)
    appendArticleToAnchor(anchor, article)
  })
}

function appendElementsToArticle(article, image, h3, p){
  article.appendChild(image)
  article.appendChild(h3)
  article.appendChild(p)
}

function makeAnchor(id) {
  const anchor = document.createElement("a")
  anchor.href = "./product.html?id=" + id
  return anchor
}

function appendArticleToAnchor(anchor, article) {
  const items = document.querySelector("#items")
  if (items) {
    items.appendChild(anchor)
    anchor.appendChild(article)
  }
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img")
  image.src = imageUrl
  image.alt = altTxt
  image.removeAttribute("title")
  image.removeAttribute("style")
  return image
}

function makeh3(name) {
  const h3 = document.createElement("h3")
  h3.textContent = name
  h3.classList.add("productName")
  return h3
}
function makeParagraph(description) {
  const p = document.createElement("p")
  p.textContent = description
  p.classList.add("productDescription")
  return p
}