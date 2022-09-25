/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '2');
const personalMovieDB = {
    count: numberOfFilms ,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};
const firstAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', 'Хищник');
const firstScoreFilm = prompt('На сколько оцените его?', '9');
const secondAnswerLastFilm = prompt('Один из последних просмотренных фильмов?', 'Соник');
const secondScoreFilm = prompt('На сколько оцените его?', '8');
personalMovieDB.movies[firstAnswerLastFilm] = firstScoreFilm;
personalMovieDB.movies[secondAnswerLastFilm] = secondScoreFilm;

// Проверить, чтобы все работало без ошибок в консоли
console.log(personalMovieDB);
