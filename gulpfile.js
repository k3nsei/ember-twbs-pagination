var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var handlebars = require('gulp-handlebars');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap');

gulp.task('clean-dist', function () {
    gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('templates', function () {
    gulp.src('src/template.hbs')
        .pipe(handlebars({
            handlebars: require('ember-handlebars')
            /*outputType: 'browser',
            processName: function () {
                return 'components/ember-twbs-pagination';
            }*/
        }))
        .pipe(wrap('Ember.Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'Ember.TEMPLATES',
            noRedeclare: true, // Avoid duplicate declarations
            processName: function () {
                return 'components/ember-twbs-pagination';
            }
        }))
        .pipe(rename('ember-twbs-pagination.template.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('ember-twbs-pagination.template.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    gulp.src(['src/item-controller.js', 'src/component.js', 'src/initializer.js'])
        .pipe(concat('ember-twbs-pagination.js'))
        .pipe(wrap('(function (Ember) {\n<%= contents %>\n}(window.Ember));'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('ember-twbs-pagination.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean-dist', 'templates', 'scripts']);
