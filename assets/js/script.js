const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keysCheck = document.querySelector(".keys-check input")
const volumeSlider = document.querySelector(".volume-slider");

let audio = new Audio("./assets/tunes/dano.wav");

const playTune = (key) => {
    audio.src = `./assets/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
    clickedKey.classList.remove("active")
    }, 150);
}

pianoKeys.forEach((key)=>{
    console.log(key);
    key.addEventListener("click", () => playTune(key.dataset.key))
})

document.addEventListener("keydown", (e)=>{
    if(e.key == 'a'){
        playTune('C');
    }else if(e.key == 'w'){
        playTune('Csus');
    }else if(e.key == 's'){
        playTune('D');
    }else if(e.key == 'e'){
        playTune('Dsus');
    }else if(e.key == 'd'){
        playTune('E');
    }else if(e.key == 'f'){
        playTune('F');
    }else if(e.key == 't'){
        playTune('Fsus');
    }else if(e.key == 'g'){
        playTune('G');
    }else if(e.key == 'y'){
        playTune('Gsus');
    }else if(e.key == 'h'){
        playTune('A');
    }else if(e.key == 'u'){
        playTune('Asus');
    }else if(e.key == 'j'){
        playTune('B');
    }else if(e.key == 'k'){
        playTune('Coc');
    }else if(e.key == 'o'){
        playTune('Csusoc');
    }else if(e.key == 'l'){
        playTune('Doc');
    }else if(e.key == 'p'){
        playTune('Dsusoc');
    }else if(e.key == 'ç'){
        playTune('Eoc');
    }else{
        console.log("tecla inválida")
    }
    
});

const handleVolume = (e)=>{
    audio.volume = e.target.value;
}
const showHidenKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHidenKeys);