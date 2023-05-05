     const incidents = [
    {
        id: 1,
        category: 'Accidents',
        img: 'https://i.ibb.co/hVMhsTX/download.jpg',
        location: 'Surulere',
        description: 'Heavy collision between a truck and a mercedes SUV on the main bridge'
    },
    {
        id: 2,
        category: 'Accidents',
        img: 'https://i.ibb.co/FqDQHL2/download-1.jpg',
        location: 'Surulere',
        description: 'Clash of cars at the highway at noon'
    },
    {
        id: 3,
        category: 'Accidents',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecgcmjPkyMqFq2_Bt8xlVj_fHUajGfeIMvQ&usqp=CAU',
        location: 'Yaba',
        description: 'Fiery flame from the collision between a car and a bus'
    },
    {
        id: 4,
        category: 'Accidents',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mLzpOVtBmAdytYAnLHFw1UE_wZVb-0929A&usqp=CAU',
        location: 'Yaba',
        description: 'Motorcycle accident brought fear amongst viewers and victims',
    },
    {
        id: 5,
        category: 'Accidents',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJUWeZOfHdgEm9afP_Va1mLy_UGYcpYmtsw&usqp=CAU',
        location: 'Ikotun',
        description: 'Major accident at the railway as the train derailed from its track',
    },
    {
        id: 6,
        category: 'Fightings',
        img: 'https://i.ibb.co/YcqHZD4/download-2.jpg',
        location: 'Ikotun',
        description: 'Two civilans caught in a brawl at the street corner',
    },
    {
        id: 7,
        category: 'Fightings',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXR2z_Rva116BO9qFQwWjY3JTr9_3iM5A45w&usqp=CAU',
        location: 'Yaba',
        description: 'Gang meeting broke into fist fights during the night time',
    },
    {
        id: 8,
        category: 'Fightings',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33TrzsDASilVzJnVc3EowL83dIMnKdcBipQ&usqp=CAU',
        location: 'Yaba',
        description: 'Coorperate workers going at it over minimum wage debate'
    },
    {
        id: 9,
        category: 'Fightings',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaazmgZH0QcgWiWtC2HjOSvVpUrTO4Zxxog&usqp=CAU',
        location: 'Surulere',
        description: 'School bullying in full display during recess at the local school'
    },
    {
        id: 10,
        category: 'Fightings',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQh1A1oQO7gAJG1cGVsuKf-KRoqlNF0LL3Q&usqp=CAU',
        location: 'Surulere',
        description: 'Total knockout at local Boxing match left spectators speechless'
    },
    {
        id: 11,
        category: 'Rioting',
        img: 'https://i.ibb.co/qCN8F8Q/download-3.jpg',
        location: 'Ikotun',
        description: 'Civilians protest after recently concluded governorship elections',
    },
    {
        id: 12,
        category: 'Rioting',
        img: 'https://i.ibb.co/fXh8LwK/download.jpg',
        location: 'Ikotun',
        description: 'Protests against covid-19 restrictions took a dark turn',
    },
    {
        id: 13,
        category: 'Rioting',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTAnYV6_fy7phj8izNVuGbN3sI8H5jlNpYg&usqp=CAU',
        location: 'Yaba',
        description: 'Students join hands together to protest against the ASUU strike',
    },
    {
        id: 14,
        category: 'Rioting',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykwZ_Yk6tgaro4MSIh0NBM5CxIR7Q8FPrXw&usqp=CAU',
        location: 'Yaba',
        description: 'Traders standing against thugs burning up their shops and stores in flames',
    },
    {
        id: 15,
        category: 'Rioting',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoX6-ADd6P2WUg43P60nxdKLXzrtdv8eIIA&usqp=CAU',
        location: 'Surulere',
        description: 'Nationwide protest against corruption in the political system',
    },
    {
        id: 16,
        category: 'Thefts',
        img: 'https://i.ibb.co/Z8MHW9f/download-1.jpg',
        location: 'Surulere',
        description: 'Purse snatchers caught in action in local community',
    },
    {
        id: 17,
        category: 'Thefts',
        img: 'https://i.ibb.co/kgzC2m8/download-2.jpg',
        location: 'Ikotun',
        description: 'Cars unsafe to park on the roads due to sudden rise in hotwiring',
    },
    {
        id: 18,
        category: 'Thefts',
        img: 'https://i.ibb.co/9sv7vBD/download-3.jpg',
        location: 'Ikotun',
        description: 'Local store was attacked by armed robbers leaving nothing behind',
    },
    {
        id: 19,
        category: 'Thefts',
        img: 'https://i.ibb.co/vj7xYJc/download-4.jpg',
        location: 'Yaba',
        description: 'Double padlocking system now adopted in homes due to sudden break-in in homes'
    },
    {
        id: 20,
        category: 'Thefts',
        img: 'https://i.ibb.co/kMmt2TM/download-5.jpg',
        location: 'Yaba',
        description: 'Cyberhacking now rampart as thieves are now going digital through technology and internet'
    },
]

var Images = [{
    id: 1,
    img: 'https://i.ibb.co/hfr591w/download.jpg',
    description: 'Popular Highway flodded with debris as brutal car accident occurs'
},
{
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqEWdzvMRGMpII61ZCClkMBZbsM_vKrkZ7Q&usqp=CAU',
    description: 'Major Road closed due to accident as officials take into the drastic scene',
},
{
    id: 3,
    img: 'https://i.ibb.co/yBDgCV1/download-1.jpg',
    description: 'OffShore Oil Rig explodes due to maintenance errors says Safety Manager',
},
{
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyVUX4XwxIWJyTS-F_O6HGGsLb6r8ld0jqM8iPJVNi1MjYu0c-W1GywNkJF8YzWcmxSw&usqp=CAU',
    description: 'Month-lasting Riot taking a more deadlier toll as days go by'
},
{
    id: 5,
    img: 'https://i.ibb.co/8MsQRKz/download-2.jpg',
    description: 'Armed robbers finally caught and put in chains after breaking into the local museum'
},]


function createCard(incident) {
    const div = document.createElement('div');
    div.classList.add('news-block');
    const img = document.createElement('img');
    img.src = incident.img;
    img.classList.add('news-img')
    const h4 = document.createElement('h4');
    h4.textContent = incident.location;
    const p = document.createElement('p');
    p.textContent = `${incident.description.substring(0, 70)}...`;
    const button = document.createElement('button');
    button.textContent = 'Read More';
    const h5 = document.createElement('h5');
    h5.textContent = `${incident.category}`
    h5.classList.add('categoryL')

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(button);

    return div;
}

    function displayCardsInDiv(filteredIncidents = incidents) {
    const cardContainer = document.getElementById('news-container');
    cardContainer.innerHTML = ''; 
    const cardElements = filteredIncidents.map(incident => createCard(incident));
    cardElements.forEach(card => {
        cardContainer.appendChild(card);
    });
}

displayCardsInDiv();


const slider = document.querySelector('.slide')
slider.innerHTML = Images.map(image => `
        <div class="content">
            <img src="${image.img}" alt="${image.id}">
            <h4 class="content-h4">${image.description}</h4>
        </div>
`).join('');

const prevBtn = document.querySelector('.slide-left')
const nextBtn = document.querySelector('.slide-right')
const slideElements = document.querySelectorAll('.content')
let currentSlide = 0;
nextBtn.addEventListener('click', function (event) {
    event.preventDefault();
    slideElements[currentSlide].classList.remove('active')
    currentSlide = (currentSlide + 1) % slideElements.length
    slideElements[currentSlide].classList.add('active')
})

prevBtn.addEventListener('click', function (event) {
    event.preventDefault()
    slideElements[currentSlide].classList.remove('active')
    currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length
    slideElements[currentSlide].classList.add('active')
})

setInterval(() => {
    slideElements[currentSlide].classList.remove('active')
    currentSlide = (currentSlide + 1) % slideElements.length
    slideElements[currentSlide].classList.add('active')
}, 5000)




const categories = [...new Set(incidents.map((incident) => incident.category))];
const categoryLinks = document.querySelectorAll('#category-links');
Array.from(categoryLinks).forEach((link) => {
  link.innerHTML = categories.map((category) => {
    return `<li class="nav-link">
              <a href="#" data-category="${category}">${category}</a>
            </li>`;
  }).join('');
});

const categoryLinkers = document.querySelectorAll('#category-links a');
categoryLinkers.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = link.dataset.category;
        const filteredNews = incidents.filter(item => item.category === category);
        displayCardsInDiv(filteredNews);
        categoryLinkers.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

const locations = [...new Set(incidents.map((location) => location.location))]
const locationLinks = document.querySelectorAll('.dropdown-content')
Array.from(locationLinks).forEach((link) => {
    link.innerHTML = locations.map((location) => {
      return `<li>
                <a data-category="${location}">${location}</a>
              </li>`;
    }).join('');
})

const locationLinkers = document.querySelectorAll('.dropdown-content a')
locationLinkers.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const location = link.dataset.category
        const filteredLocation = incidents.filter(item => item.location === location)
        displayCardsInDiv(filteredLocation)
        locationLinkers.forEach(l => l.classList.remove('active'))
        link.classList.add('active')
    })
})

const menuIcon = document.querySelector('#menu-icon')
const closeIcon = document.querySelector('#close-icon')
const sideBar = document.querySelector('.side-bar')

menuIcon.addEventListener('click', () => {
    sideBar.style.display = 'flex'
})

closeIcon.addEventListener('click', () => {
    sideBar.style.display = 'none'
})








