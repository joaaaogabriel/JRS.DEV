const games = [
  { title: "Super Mario Bros", year: 1985, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Pac-Man", year: 1980, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Tetris", year: 1984, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Donkey Kong", year: 1981, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Street Fighter II", year: 1991, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Space Invaders", year: 1978, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Sim City", year: 1989, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "The Legend of Zelda", year: 1986, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Doom", year: 1993, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Super Mario 64", year: 1996, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Pokémon", year: 1996, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Resident Evil", year: 1996, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Final Fantasy VII", year: 1997, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Half-Life", year: 1998, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Metal Gear Solid", year: 1998, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Grand Theft Auto III", year: 2001, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Guitar Hero", year: 2005, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Angry Birds", year: 2009, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Farmville", year: 2009, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "League of Legends", year: 2009, showMoreDetails: false, details: 'lorem ipsun' },
  { title: "Minecraft", year: 2011, showMoreDetails: false, details: 'lorem ipsun' },

  
];

const gameList = document.querySelector('.game-list');

games.forEach(game => {
  const gameCard = document.createElement('div');
  gameCard.classList.add('game-card');
  gameCard.setAttribute("id", game.title);
  gameCard.addEventListener('click', () => showDetails(game.title, gameCard))
  gameCard.innerHTML = `<h2>${game.title}</h2>
                        <p>Ano: ${game.year}</p>
                        <p></p>`
  gameList.appendChild(gameCard);
});

function showDetails(elementID, card) {
  console.log('aqui', elementID)
  games.forEach(game => {
    if (game.title === elementID) {
      game.showMoreDetails = !game.showMoreDetails;
      updateDetailsInDOM(game, card);
      console.log(game);
      return;
    }
  });
}

function updateDetailsInDOM(game, card) {
  const detailsParagraph = card.querySelector('p:last-child');
  detailsParagraph.textContent = `${game.showMoreDetails ? game.details : ''}`;
}




