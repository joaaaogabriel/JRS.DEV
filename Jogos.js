const games = [
  { title: "Super Mario Bros", year: 1985 },
  { title: "Pac-Man", year: 1980 },
  { title: "Tetris", year: 1984 },
  { title: "Donkey Kong", year: 1981 },
  { title: "Street Fighter II", year: 1991 },
  { title: "Space Invaders", year: 1978 },
  { title: "Sim City", year: 1989 },
  { title: "The Legend of Zelda", year: 1986},
  { title: "Doom", year: 1993 },
  { title: "Super Mario 64", year: 1996 },
  { title: "Pokémon", year: 1996 },
  { title: "Resident Evil", year: 1996 },
  { title: "Final Fantasy VII", year: 1997 },
  { title: "Half-Life", year: 1998 },
  { title: "Metal Gear Solid", year: 1998 },
  { title: "Grand Theft Auto III", year: 2001 },
  { title: "Guitar Hero", year: 2005 },
  { title: "Angry Birds", year: 2009 },
  { title: "Farmville", year: 2009 },
  { title: "League of Legends", year: 2009 },
  { title: "Minecraft", year: 2011 },


  // Adicione mais jogos conforme necessário
];

const gameList = document.querySelector('.game-list');

games.forEach(game => {
  const gameCard = document.createElement('div');
  gameCard.classList.add('game-card');
  gameCard.innerHTML = `<h2>${game.title}</h2>
                        <p>Ano: ${game.year}</p>`;
  gameList.appendChild(gameCard);
});



