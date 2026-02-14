const params = new URLSearchParams(location.search);
const fromName = params.get('from') || 'Hassan';
const toName   = params.get('to')   || 'My Love';
document.getElementById('fromName').textContent = fromName;
document.getElementById('toName').textContent   = toName;
document.getElementById('signatureName').textContent = fromName;

const musicBtn = document.getElementById('musicBtn');
const song = document.getElementById('song');
let playing = false;

musicBtn.addEventListener('click', async () => {
  if (!playing) {
    await song.play();
    playing = true;
    musicBtn.textContent = '⏸ Pause our song';
  } else {
    song.pause();
    playing = false;
    musicBtn.textContent = '▶ Play our song';
  }
});
