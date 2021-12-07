export function playAudio(keyName) {
    try {
        const audio = new Audio(`assets/audio/${keyName}`);
        audio.currentTime = 1;
        audio.play();
    }
    catch (e) {
        console.error('Problema ocorrido.');
    }
}
//# sourceMappingURL=utils.js.map