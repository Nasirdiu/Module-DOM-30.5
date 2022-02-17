function getUpdate(play) {
  play.style.border = "1px solid red";
  play.style.margin = "5px";
  play.style.padding = "5px";
}
const players = document.getElementsByClassName("player");
for (const play of players) {
  getUpdate(play);
//   play.addEventListener('click',function(){
//     play.style.backgroundColor='yellow';
//   })

}

function add() {
  const players = document.getElementById("players");
  const player = document.createElement("div");
  player.classList.add("players");
  player.innerHTML = `
                <h4 class="player-name">playert -add</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, sequi? Laboriosam, dolores ex numquam veritatis reprehenderit doloremque dolorem, minima molestias cumque explicabo voluptatibus facilis laborum adipisci pariatur, voluptatum debitis eligendi.</p>
    `;
  players.appendChild(player);
  getUpdate(player);
//   player.addEventListener('click',function(){
//     player.style.backgroundColor='yellow';
//   })
}
document.getElementById('players').addEventListener('click',function(event){
    console.log(event.target.tagName.toLowerCase());
    if(event.target.tagName.toLowerCase()=='div'){
    event.target.style.backgroundColor='yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor='green'
    }
    })
