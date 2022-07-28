music = ['1','2','3','4','5','6','7','8','9','10'];
document.querySelector("audio").setAttribute("src",`music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
