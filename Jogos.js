const games = [
  { title: "Super Mario Bros", year: 1985, showMoreDetails: false, details: 'Um jogo de plataforma onde os jogadores controlam Mario e devem resgatar a Princesa Peach do vilão Bowser.' },
  { title: "Pac-Man", year: 1980, showMoreDetails: false, details: ' Um jogo de arcade onde os jogadores controlam Pac-Man e devem comer todos os pontos dentro de um labirinto enquanto evitam fantasmas.' },
  { title: "Tetris", year: 1984, showMoreDetails: false, details: 'É um jogo eletrônico de quebra-cabeça desenvolvido e lançado pela primeira vez na União Soviética.' },
  { title: "Donkey Kong", year: 1981, showMoreDetails: false, details: 'Um jogo de arcade onde os jogadores controlam Mario e devem resgatar uma donzela em perigo do gorila Donkey Kong.' },
  { title: "Street Fighter II", year: 1991, showMoreDetails: false, details: 'Um jogo de luta onde os jogadores controlam uma variedade de personagens e devem derrotar seus oponentes em combate.' },
  { title: "Space Invaders", year: 1978, showMoreDetails: false, details: 'Um jogo de arcade onde os jogadores controlam uma nave espacial e devem destruir ondas de alienígenas.' },
  { title: "Sim City", year: 1989, showMoreDetails: false, details: 'É uma série de jogos de simulação de construção de cidades desenvolvida pela Maxis e publicada pela Electronic Arts.' },
  { title: "The Legend of Zelda", year: 1986, showMoreDetails: false, details: 'Uma série de jogos de ação-aventura onde os jogadores controlam um personagem chamado Link e devem resgatar a Princesa Zelda e derrotar o vilão Ganon.' },
  { title: "Doom", year: 1993, showMoreDetails: false, details: 'É uma série de jogos eletrônicos de tiro em primeira pessoa desenvolvida pela id Software. O jogo original é considerado um dos jogos mais influentes e importantes da história dos videogames.' },
  { title: "Super Mario 64", year: 1996, showMoreDetails: false, details: 'Super Mario 64 é um jogo eletrônico de plataforma tridimensional (3D) no qual o jogador controla Mario através de várias fases. Cada fase é um mundo aberto, no qual o jogador é livre para passear em todas as direções e explorar o ambiente sem limites de tempo.' },
  { title: "Pokémon", year: 1996, showMoreDetails: false, details: ' É uma franquia de mídia centrada em criaturas fictícias chamadas “Pokémon”, que os humanos, conhecidos como treinadores Pokémon, capturam e treinam para lutarem um contra o outro por esporte.' },
  { title: "Resident Evil", year: 1996, showMoreDetails: false, details: 'Um jogo de terror de sobrevivência onde os jogadores controlam personagens que devem escapar de um local infestado de zumbis e outras criaturas monstruosas.' },
  { title: "Final Fantasy VII", year: 1997, showMoreDetails: false, details: 'Um jogo de RPG onde o jogador controla o personagem principal Cloud Strife, um mercenário que se junta a uma organização ecológica para parar uma corporação mundial de drenar a energia do planeta.' },
  { title: "Half-Life", year: 1998, showMoreDetails: false, details: 'Um jogo de tiro em primeira pessoa onde os jogadores assumem o papel do cientista Gordon Freeman, que deve lutar contra alienígenas e soldados inimigos.' },
  { title: "Metal Gear Solid", year: 1998, showMoreDetails: false, details: 'Um jogo de ação-aventura furtiva onde os jogadores controlam um soldado de forças especiais chamado Solid Snake que deve encontrar um superarma chamada “Metal Gear.' },
  { title: "Grand Theft Auto III", year: 2001, showMoreDetails: false, details: 'Um jogo de ação-aventura em um mundo aberto onde os jogadores completam missões—cenários lineares com objetivos definidos—para progredir na história.' },
  { title: "Guitar Hero", year: 2005, showMoreDetails: false, details: 'É um jogo de ritmo e música desenvolvido pela Harmonix e publicado pela RedOctane. E é jogado com um controlador em forma de guitarra.' },
  { title: "Angry Birds", year: 2009, showMoreDetails: false, details: 'É uma série de jogos desenvolvidos pela finlandesa Rovio Entertainment. Inspirado no início por esboços de pássaros desenhados sem asas, o primeiro jogo foi lançado para Apple iOS.' },
  { title: "Farmville", year: 2009, showMoreDetails: false, details: ' É um jogo de simulação agrícola desenvolvido pela Zynga. O jogo permite aos jogadores cultivar plantações, criar animais e construir a sua própria fazenda.' },
  { title: "League of Legends", year: 2009, showMoreDetails: false, details: 'Uma série de jogos de ação-aventura onde os jogadores controlam um personagem chamado Link e devem resgatar a Princesa Zelda e derrotar o vilão Ganon.' },
  { title: "Minecraft", year: 2011, showMoreDetails: false, details: 'Seu objetivo é coletar recursos (madeira, rochas, minérios, carvão, alimentos) e construir ferramentas e abrigos cada vez melhores para sobreviver e se salvar dos monstros que surgem durante a noite. Mas não é só de sobrevivência que o jogo se trata. Minecraft é também sobre exploração e constante evolução.' },

  // Adicione mais jogos conforme necessário
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
