var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');


gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/style.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/script.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

// gulp.task('default', () =>
// 	gulp.src('src/app.css')
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('dist'))
// );
// gulp.task('sass', function(){
//   gulp.src('source-files')
//     .pipe(sass()) // Using gulp-sass
//     .pipe(gulp.dest('destination'))
// });