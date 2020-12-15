let mantraArray = [
    {name: "Lotus Sutra",
    description: "For many East Asian Buddhists since early times, the Lotus Sutra contains the final teaching of the Buddha, complete and sufficient for salvation.",
    video: 'https://www.youtube.com/watch?v=isXLBHCDo4Y&ab_channel=TINATurnerBlog',
    website: 'https://www.lionsroar.com/what-happens-in-the-lotus-sutra-unpacking-the-events-in-this-famous-buddhist-scripture/',
    photo: 'https://i2.wp.com/www.lotus-happiness.com/wp-content/uploads/2018/04/final-lotusolgolden_1-720-x-720.jpg?resize=720%2C720&ssl=1'
    }, 

    {
     name: 'Heart Sutra',
     description: 'The Heart Sutra is the single most commonly recited, copied and studied scripture in East Asian Buddhism.',
     video: 'https://www.youtube.com/watch?v=VYOyDntRjDY&ab_channel=89992',
     website: 'https://www.lionsroar.com/the-heart-sutra-will-change-you-forever/',
     photo: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/10-heart-sutra-ken-wong.jpg'
    },

    {
     name: 'Om Mani Padme Hum', 
     description: 'This is the six-syllabled Sanskrit mantra particularly associated with the four-armed Shadakshari form of Avalokiteshvara, the bodhisattva of compassion.',
     video: 'https://www.youtube.com/watch?v=R-ZO7bsA2pA&t=659s&ab_channel=Buddhalands',
     website: 'https://www.shambhala.com/snowlion_articles/om-mani-padme-hum-dalai-lama/',
     photo: 'https://i.etsystatic.com/7295239/r/il/678039/427408162/il_570xN.427408162_jhmh.jpg'
    }
]

let randomMantra = mantraArray[Math.floor(Math.random() * mantraArray.length)]

let newMantraBtn = document.querySelector('button.mantra-button')
let form = document.querySelector('form#new-mantra-form')
let formName = form.name
let formDescription = form.description

 function toggleColor (element) {
    let colorsArray = [
        '#6b6bfa', 
        '#fcb5fc',
        '#ddff99',
        '#ffff66', 
        '#fa6b6b',
    ]

    let randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    element.target.style.backgroundColor = randomColor
    if (element.target.style.backgroundColor === 'rgb(255, 255, 102)' || element.target.style.backgroundColor === "rgb(221, 255, 153)") {
        element.target.style.color = 'black'
    } else {
        element.target.style.color = 'white'
    }
 }
function renderMantra (mantraObject) {

 const img = document.createElement("img")
    img.src = mantraObject.photo
    img.alt = mantraObject.species

    const p = document.createElement("p")
    p.textContent = mantraObject.description

    const a = document.createElement("a")
    a.href = mantraObject.video
    a.target = "_blank"
    a.textContent = `Here's a video about the ${mantraObject.name} species!`

    const h2 = document.createElement('h2')
    var linkedName = mantraObject.name.link(mantraObject.website)
    h2.innerHTML = linkedName
    // h2.link(mantraObject.website)

    const li = document.createElement("li")
    const mantraUl = document.querySelector('ul#mantra-list')

    li.append(h2, img, p, a)
    mantraUl.append(li)
    // debugger 
 } 

 newMantraBtn.addEventListener('mouseover', toggleColor)
 formName.addEventListener('click', toggleColor )
 formDescription.addEventListener('change', toggleColor)

 

 newMantraBtn.addEventListener('click', function (evt) {
    evt.preventDefault()

    if(mantraArray.length > 0){
        let theMantra = mantraArray.pop()
        renderMantra(theMantra)
    } else {
        newMantraBtn.textContent = "No more mantras. Add your own now :)"
    }

   
    // renderMantra(randomMantra)
    // mantraArray.forEach(function (mantra) {
    //     if 
    //     return mantra
    // })
// debugger 
 }) 

 





