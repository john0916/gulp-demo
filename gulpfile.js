var gulp = require('gulp');
gulp.task('default',['one','two','three'], function(){
	console.log('开始任务')
	gulp.run('aaa')//gulp.start('aaa')
	gulp.src('src/js/**')
		.pipe(
				gulp.dest('dist')
			)
})
//异步任务
gulp.task('one', function(cb){
	setTimeout(function(){
		console.log('执行任务1')
	},1000)
	cb()
})
gulp.task('two', function(){
	console.log('执行任务2')
})
gulp.task('three', function(){
	console.log('执行任务3')
})
gulp.task('aaa', function(){
	console.log('111111111111')
})
gulp.watch('src/js/**', function(){
	console.log('文件变化')
})