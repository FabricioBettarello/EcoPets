function Feedback() {
    const feedback = prompt('Escreva seu feedback:');
    if (feedback !== null) {
        alert('Feedback enviado com sucesso! Obrigado por contribuir com o projeto.');
    }
}

function redirectLogin() {
    window.location.href = "../login/login.html";
}

function Login() {
    var uname = document.getElementsByName('username')[0].value;
    var psw = document.getElementsByName('password')[0].value;

    if (uname === '1234@1234' && psw === '1234') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Email ou senha incorretos!');
    }
}

function register() {
    alert('Registro realizado com sucesso!')
}

const slides = document.querySelector('.slides');
    const slideWidth = slides.clientWidth;
    let currentSlide = 0;

    function showNextSlide() {
      currentSlide = (currentSlide + 1) % 5;
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    setInterval(showNextSlide, 5000);