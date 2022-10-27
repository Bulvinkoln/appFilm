/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms ,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};
// const firstAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', 'Хищник');
// const firstScoreFilm = +prompt('На сколько оцените его?', '9');
// const secondAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', 'Соник');
// const secondScoreFilm = +prompt('На сколько оцените его?', '8');
// personalMovieDB.movies[firstAnswerLastFilm] = firstScoreFilm;
// personalMovieDB.movies[secondAnswerLastFilm] = secondScoreFilm;

for(let i = 0; i < 2; i++) {
    const firstAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const firstScoreFilm = +prompt('На сколько оцените его?', '');

    if(firstAnswerLastFilm != null && firstScoreFilm != null && firstAnswerLastFilm != '' && firstScoreFilm != '' && firstAnswerLastFilm.length < 50  ) {
        personalMovieDB.movies[firstAnswerLastFilm] = firstScoreFilm;
    } else {i--;}
    
}
if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if(personalMovieDB.count >= 30) {
    alert("Вы классический зритель");
} else {
    alert("Произошла ошибка");
};

// Проверить, чтобы все работало без ошибок в консоли
console.log(personalMovieDB);
