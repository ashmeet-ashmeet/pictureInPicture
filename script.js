const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video element, the play
async function selectMediaStream(displayMediaOptions) {
    let mediaStream = null;
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error) {
        console.log(error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On load
selectMediaStream();
