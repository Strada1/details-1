
const btnSettings = document.getElementById('btnSettings');
const btnWindowSettingsExit = document.getElementById('btnWindowSettingsExit');
const windowChat = document.getElementsByClassName('windowChat');
const windowSettings = document.getElementsByClassName('windowSettings');

btnSettings.addEventListener("click", () => { windowChat[0].style.display = 'none'; windowSettings[0].style.display = 'flex'; });
btnWindowSettingsExit.addEventListener("click", () => { windowChat[0].style.display = 'flex'; windowSettings[0].style.display = 'none'; });