/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms ,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const firstAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const firstScoreFilm = +prompt('На сколько оцените его?', '');
    
        if(firstAnswerLastFilm != null && firstScoreFilm != null && firstAnswerLastFilm != '' && firstScoreFilm != '' && firstAnswerLastFilm.length < 50  ) {
            personalMovieDB.movies[firstAnswerLastFilm] = firstScoreFilm;
        } else {i--;}
        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count >= 30) {
        alert("Вы классический зритель");
    } else {
        alert("Произошла ошибка");
    };
}
detectPersonalLevel();
// Проверить, чтобы все работало без ошибок в консоли

function showMyDB(personPrivat) {
    if (!personPrivat) {
        console.log(personalMovieDB)
    }
    
}
showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i-1] = genres;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();