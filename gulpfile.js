const gulp = require('gulp');
const sequence = require('gulp-sequence');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');

const packages = {
    "addon-redis": ts.createProject("src/tsconfig.json"),
};

const dist = "dist";
const modules = Object.keys(packages);

modules.forEach(module => {
    gulp.task(module, () => {
        return packages[module]
            .src()
            .pipe(tslint({
                formatter: "verbose",
            }))
            .pipe(tslint.report({
                emitError: false,
                summarizeFailureOutput: true,
            }))
            .pipe(sourcemaps.init())
            .pipe(packages[module]())
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest(dist));
    });
});

gulp.task('copy-docs', function () {
    return gulp.src(['README.md'])
        .pipe(gulp.dest(dist))
});

gulp.task('copy-license', function () {
    return gulp.src('LICENSE')
        .pipe(gulp.dest(dist))
});

gulp.task("build", sequence("addon-redis", 'copy-docs', 'copy-license'));