

var detailsForm = document.querySelector('#destination_details_form')

detailsForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault()

    var destCat = event.target.elements['category'].value
    var destLocation = event.target.elements['location'].value
    var destPhoto = event.target.elements['photo'].value
    var destDesc = event.target.elements['description'].value

    

    

    var destCard = createDestinationCard(destCat, destLocation, destPhoto, destDesc);



    document.querySelector('#destinations_container').appendChild(destCard)
}



function createDestinationCard(category, location, photoURL, description) {

    var card = document.createElement('div')
    card.className = 'news-block'

    var img = document.createElement('img');
    img.setAttribute('alt', category);
    img.setAttribute('src', photoURL);
    img.className = 'news-img'

    card.appendChild(img)

    var cardLocation = document.createElement('h4')
    cardLocation.innerText = location
    card.appendChild(cardLocation)

    var cardTitle = document.createElement('p')
    cardTitle.innerText = description
    card.appendChild(cardTitle)



    var cardDeleteBtn = document.createElement('button')
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDestination)
    card.appendChild(cardDeleteBtn)



    return card;
}

function removeDestination(event) {
    var card = event.target.parentElement;
    card.remove()
}

