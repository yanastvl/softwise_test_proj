import translations from '../lang/translations';


export function startTimer(duration, locale) {
    let timerElem = document.querySelector('.timer')
    let timer = duration, minutes, seconds;
    setInterval(function () {
        if (timer >= 0) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? minutes : minutes;
            seconds = seconds < 10 ? seconds : seconds;

            let warning = document.querySelector('.warning');
            warning.style.visibility = "visible";

            timerElem.textContent = `${minutes} ${translations[locale]["minutes"]} ${seconds} ${translations[locale]["seconds"]}`;
    
            if (--timer < 0) {
                window.location.replace("http://google.com");
            }
        }
    }, 1000);
}
