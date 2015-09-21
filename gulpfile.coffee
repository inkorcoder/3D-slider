# ===============================================================
# ===============================================================
# 
# 
# 							GULPFILE.COFFEE BY INKOR | 11.12.2014
# 
# 
# ===============================================================
# ===============================================================
###
	@module
		title: Gulpfile *n
		type: coffeescript *n
		caption:
			p{ Gulp.js является главным связующим элементом системы.
			Это сборщик, который позволяет ускорить и автоматизировать
			работу при разработке проекта. Он распологает огромным
			количеством модулей под любые нужды и случаи. }p
			p{ Для его корректной работы с этой системой нужна
			платформа Node.js, а так же список необходимых модулей
			для компиляции, минификации и интеграции системы с Вашей
			операционной системой. }p
			h3{ СТРУКТУРА }h3
		*n
###


# ---------------------------------------------------------------
# PATH
# ---------------------------------------------------------------
###
	@property
		name: PATH *n
		caption:
			p{ Переменная PAHT содержит относительный путь к корневой
			папке. Корень проектка - папка с bd{ gulpfile.coffee} }p
			p{ По умолчанию текущая папка, - bd{ '' }
			Это может быть bd{ '../../' } или bd{ 'myfolder/' } }p
		*n
###
PATH 			= ''


# ---------------------------------------------------------------
# OPTIONS
# ---------------------------------------------------------------
###
@property
	name: OPTIONS *n
	caption:
			p{ Объект, содержит в себе настройки для этого файла. 
		При запуске, bd{Gulp.js} 'поднимает' локальный сервер,
		настройки которого Вы так же можете изменить.}p
		ul{
			li{ bd{serverHost} - имя локального сервера}li
			li{ bd{serverPort} - порт}li
			li{ bd{serverLivereload} - Livereload, автоматическое
			обновление страницы при изменении редактируемых файлов.
			Вам не нужны дополнительные плагины или примочки для
			Вашей IDE}li
			li{ bd{coffeeWraping} - Включает или выключает 
			оборачивание javascript-модулей(файлов) в анонимные 
			самовызывающиеся функции при копиляции из 
			bd{coffeescript}-исходников}li
			li{ bd{notices} - Включает или выключает оповещения
			об ошибках или информации для отладки в Вашей ОС. }li
		}ul
	*n
###
OPTIONS 	=
	serverHost: 				'localhost'
	serverPort: 				1111
	serverLivereload: 	on
	coffeeWraping: 			true
	notices: 						true


# -------------------------------------------------------------
# MODULES
# -------------------------------------------------------------
###
	@plugin
		name: fs *n
		caption:
			p{ Манипуляции с файловой системой. Чтение, запись, создание
			списка файлов в bd{ list.json } (./dev-tools/list.json) }p
			a{ https://nodejs.org/api/fs.html }
		*n
###
fs 					= require 'fs'

###
	@plugin
		name: gulp *n
		caption:
			p{ Сборщик проектов, основа для остальных модулей, нужных
			для автоматизации, компиляции и минификации файлов проекта}p
			a{ https://github.com/gulpjs/gulp }
		*n
###
gulp 				= require 'gulp'

###
	@plugin
		name: gulp-connect *n
		caption:
			p{ Модуль серверной части. Его настройки содержит в себе
			bd{ OPTIONS } }p
			a{ https://www.npmjs.com/package/gulp-connect }
		*n
###
connect 		= require 'gulp-connect'

###
	@plugin
		name: gulp-connect *n
		caption:
			p{ Компилятор Coffeescript. Настройку оборачивания для него
			содержит в себе bd{ OPTIONS } }p
			p{ Компилятор выбирает все файлы в папке bd{ coffee },
			компилирует их и помещает *js-файлы в папку bd{ dist/js }
			с таким же названием, которое имеет исходный файл. }p
			p{ Если вы не знаете что такое Coffeescript, Вы можете 
			править *js-файлы. При этом папку bd{ coffee } нужно удалить,
			иначе при запуске bd{ gulp } исходники в этой папке 
			скомпилируются и перезапишут *js-файлы. Будьте осторожны. }p
			a{ https://www.npmjs.com/package/gulp-coffee }
		*n
###
coffee 			= require 'gulp-coffee'

###
	@plugin
		name: gulp-clean *n
		caption:
			p{ Очистка временных файлов после компиляции}p
			a{ https://www.npmjs.com/package/gulp-clean }
		*n
###
clean 			= require 'gulp-clean'

###
	@plugin
		name: gulp-sass *n
		caption:
			p{ Компиляция SASS-исходников в *css-файлы }p
			p{ Компилятор выбирает все файлы в папке bd{ scss },
			компилирует их и помещает *css-файлы в папку bd{ dist/css }
			с таким же названием, которое имеет исходный файл. }p
			p{ Если вы не знаете что такое Coffeescript, Вы можете 
			править *css-файлы. При этом папку bd{ scss } нужно удалить,
			иначе при запуске bd{ gulp } исходники в этой папке 
			скомпилируются и перезапишут *css-файлы. Будьте осторожны. }p
			a{ https://www.npmjs.com/package/gulp-sass }
		*n
###
sass 				= require 'gulp-sass'

###
	@plugin
		name: colors *n
		caption:
			p{ Модуль цветов. Это вспомогающий модуль, который 
			'разукрашивает' команды консоли в разные цвета }p
			a{ https://github.com/marak/colors.js/ }
		*n
###
colors 			= require 'colors'

###
	@plugin
		name: gulp-include *n
		caption:
			p{ Модуль вставки файлов друг в друга. Этот модуль позволяет
			вставлять содержимое нужного файла в определенное место, 
			используя специальные конструкции - bd{ //=include 'myfile.txt' } }p
			p{ Полную информацию об используемых конструкциях можно найти на 
			странице плагина. }p
			a{ https://www.npmjs.com/package/gulp-include }
		*n
###
fileinclude = require 'gulp-include'

###
	@plugin
		name: gulp-cssmin *n
		caption:
			p{ Модуль минифицирует *css-файлы. Минифицированные файлы
			находятся по пути bd{ dist/css }. В то время, как не 
			минифицированные - bd{ dist/css/full } }p
			a{ https://www.npmjs.com/package/gulp-cssmin }
		*n
###
cssmin 			= require 'gulp-cssmin'

###
	@plugin
		name: gulp-rename *n
		caption:
			p{ Вспомогающий модуль, для переименования файлов после компиляции. }p
			a{ https://www.npmjs.com/package/gulp-rename }
		*n
###
rename 			= require 'gulp-rename'

###
	@plugin
		name: gulp-filelist *n
		caption:
			p{ Вспомогающий модуль для ADK. Формирует JSON-файл, содержащий 
			список файлов проекта, нужный для работы со списком файлов в ADK}p
			a{ https://www.npmjs.com/package/gulp-filelist }
		*n
###
filelist 		= require 'gulp-filelist'

###
	@plugin
		name: gulp-using *n
		caption:
			p{ Вспомогающий модуль. Формирует лог файлов, которые Вы изменяете. }p
			a{ https://www.npmjs.com/package/gulp-using }
		*n
###
using 			= require 'gulp-using'

###
	@plugin
		name: map-stream *n
		caption:
			p{ Вспомогающий модуль. Формирует лог файлов, которые Вы изменяете. }p
			a{ https://www.npmjs.com/package/map-stream }
		*n
###
map 				= require 'map-stream'

###
	@plugin
		name: gulp-plumber *n
		caption:
			p{ Вспомогающий модуль. Предотвращает сбои Gulp.js при возникновении ошибки }p
			a{ https://www.npmjs.com/package/gulp-plumber }
		*n
###
plumber 		= require 'gulp-plumber'

###
	@plugin
		name: exec *n
		caption:
			p{ При помощи этого модуля становится возможным использование 
			системных команд ОС }p
		*n
###
exec = require("child_process").exec

# -----------------------------------------------------------------------------
# CONSOLE
# -----------------------------------------------------------------------------

###
	@method
		name: consol() *n
		caption: 
			p{ Метод для выводв в консоль сообщения. }p *n
		arguments: str, str2, str3 *n
		return: nothing *n
###
consol = (str, str2, str3) ->
	console.log "
		#{str}
		#{colors.green(str2)} 
		#{colors.grey(str3)}
	"

###
	@method
		name: execute() *n
		caption: 
			p{ Метод для выполнения команд ОС внутри модуля. Этот метод 
			выполняет команду, которую принимает на входе }p
			p{ arg{ command } - команда, которая должна быть выполнена }p
			p{ arg{ callback } - функция, которая будет выполнена после 
			выполнения команды bd{ command } }p
		*n
		arguments: command, callback *n
		return: nothing *n
###
execute = (command, callback) ->
	exec command, (error, stdout, stderr) ->
		callback stdout

###
	@method
		name: _CoffeeConsole() *n
		caption: 
			p{ Приватный метод, обрабатывающий ошибки при компиляции 
			Coffeescript. Если включен параметр bd{ OPTIONS.notices },
			сообщение для отладки выводится не только в терминал, но 
			и показывается в виде оповещения операционной системы }p
			p{ bd{ err } - объект, содержащий подробности об ошибке }p
		*n
		arguments: err *n
		return: nothing *n
###
_CoffeeConsole = (err)->
	if OPTIONS.notices is on
		execute "
			notify-send
			'☢ ERROR :: Coffeescript'
			'ⓘ #{err.message}\r\n → #{err.stack.substr(0,err.stack.indexOf('error:'))}'
		", ->
	console.log "
		#{colors.red('ERROR')}::#{colors.green('CoffeeScript')} #{colors.blue(err.message)}\r\n
		#{colors.gray(err.stack)}
	"

###
	@method
		name: _SASSConsole() *n
		caption: 
			p{ Приватный метод, обрабатывающий ошибки при компиляции 
			SASS. Если включен параметр bd{ OPTIONS.notices },
			сообщение для отладки выводится не только в терминал, но 
			и показывается в виде оповещения операционной системы }p
			p{ bd{ err } - объект, содержащий подробности об ошибке }p
		*n
		arguments: err *n
		return: nothing *n
###
_SASSConsole = (err)->
	if OPTIONS.notices is on
		execute "
			notify-send
			'☢ ERROR :: SASS'
			'ⓘ #{err.message}'
		", ->
	console.log "
		#{colors.red('ERROR')}::#{colors.green('SASS')} #{colors.blue(err.message)}\r\n
		#{colors.grey('File:')} #{colors.grey(err.fileName)} #{colors.grey(', line')} #{colors.grey(err.lineNumber)}
	"

###
	@method
		name: _writeLog() *n
		caption: 
			p{ Приватный метод, для вывода информации в терминал. }p
			p{ bd{ element } - объект, содержащий подробности об ошибке }p
		*n
		arguments: element, type, str *n
		return: nothing *n
###
_writeLog = (element, type, str) ->
	using.write = (options) ->
		g = global.process
		date = new Date()
		getDate = (_d) ->
			return "
			#{if date.getDay() < 10 then '0'+date.getDay() else date.getDay()}.#{if date.getMonth() < 10 then '0'+(date.getMonth()+1) else date.getMonth()+1}.#{date.getFullYear()}
		"
		getTime = (_d) ->
			return "
			#{if date.getHours() < 10 then '0'+date.getHours() else date.getHours()}:#{if date.getMinutes() < 10 then '0'+date.getMinutes() else date.getMinutes()}:#{if date.getSeconds() < 10 then '0'+date.getSeconds() else date.getSeconds()}
		"
		if type is 'file'
			d = "
				[#{getTime date}]
			"
			i = 0
			map (file, cb) ->
				f = file.path.replace(file.cwd, '.')
				if i is 0
					d += " #{f}"
				else
					d += "\r\n           #{f}"
				fs.appendFile 'project_log.txt', "#{d}\r\n"
				# console.log i
				i++
		else
			if OPTIONS.notices is on
				execute "
					notify-send
					'APERTURA'
					'ⓘ gulp was started'
				", ->
			d = "
			\r\n\r\n#################################################################
			\r\nGulp.js started at #{getDate date} :: #{getTime date}
			\r\n-----------------------------------------------------------------
			\r\nUSER       #{if g.env.USERNAME is undefined then g.env.USER else g.env.USERNAME}
			\r\nOS         #{if g.env.OS is undefined then g.env.DESKTOP_SESSION else g.env.OS}
			\r\nPLATFORM   #{g.platform}
			\r\nnode -v    #{g.versions.node}
			\r\nv8 -v      #{g.versions.v8}
			\r\n#################################################################
			"
			fs.appendFile 'project_log.txt', "#{d}\r\n"

	if type is 'file'
		element
				.pipe do using.write
	else
		do using.write

_writeLog gulp.src(PATH), 'start'

# -----------------------------------------------------------------------------
# TASKS
# -----------------------------------------------------------------------------

###
	@method
		name: gulp.task()::connect *n
		caption:
			p{ 'Подъем' локального сервера. Настройки сервера 
			указываются в объекте bd{ OPTIONS }}p
		*n
		arguments: none *n
		return: server *n
###
gulp.task 'connect', ->
	connect.server
		host: 			OPTIONS.serverHost
		port: 			OPTIONS.serverPort
		livereload: OPTIONS.serverLivereload
		root: 			[PATH+'dist',PATH+'dev-tools',PATH+'scss']

###
	@method
		name: gulp.task()::coffee *n
		caption:
			p{ Компиляция CoffeeScript. Таск выбирет все файлы 
			по маске bd{ 'coffee/*coffee' }, вставляет содержимое 
			других фалов (функции bd{ #=include '../file.coffee'}, 
			если они присутствуют), компилирует код, 
			складывает в папку bd{ 'dist/js' } и обновляет страницу 
			в браузере (если эта включена в объекте bd{ OPTIONS }). 
			При этом Вы можете отключать оборачивание модулей в 
			самовызывающиеся функции (см. объект bd{ OPTIONS }).}p
			p{ Так же, таск не прерывает работу сборщика в случае 
			возникновения ошибки. Сообщение об ошибке и отладочная 
			информация пишется в консоль и выводится в виде 
			нотификации (оповещения) вашей системы.}p
			p{ Оповещения работают только под линук-дистрибутивами.
			Для этого убедитесь, что пакет bd{ libnotify-bin } 
			установлен. }p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task ' coffee', ->
	log = gulp.src PATH+'coffee/*coffee'
	_writeLog log, 'file'
	log
		.pipe plumber
			errorHandler: (err)->
				_CoffeeConsole err
		.pipe do fileinclude
	if OPTIONS.coffeeWraping is true
		log
			.pipe plumber
				errorHandler: (err)->
					_CoffeeConsole err
			.pipe coffee
				bare: true
			.pipe gulp.dest PATH+'dist/js'
	else
		log
			.pipe plumber
				errorHandler: (err)->
					_CoffeeConsole err
			.pipe do coffee
			.pipe gulp.dest PATH+'dist/js'
	log
		.pipe do connect.reload
	log = gulp.src PATH+'dev-tools/dev-tools-js/coffee/*coffee'
	_writeLog log, 'file'
	log
		.pipe plumber
			errorHandler: (err)->
				_CoffeeConsole err
		.pipe do fileinclude
		.pipe coffee
			bare: true
		.pipe gulp.dest PATH+'dev-tools/dev-tools-js/'
		.pipe do connect.reload

###
	@method
		name: gulp.task()::sass *n
		caption:
			p{ Компиляция SASS. Таск выбирет все файлы 
			по маске bd{ 'scss/-/*scss' }, вставляет содержимое, 
			компилирует код, складывает в папку bd{ 'dist/css' } 
			и обновляет страницу в браузере (если эта включена в 
			объекте bd{ OPTIONS }) }p
			p{ Так же, таск не прерывает работу сборщика в случае 
			возникновения ошибки. Сообщение об ошибке и отладочная 
			информация пишется в консоль и выводится в виде 
			нотификации (оповещения) вашей системы.}p
			p{ Оповещения работают только под линук-дистрибутивами.
			Для этого убедитесь, что пакет bd{ libnotify-bin } 
			установлен. }p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '   sass', ->
	log = gulp.src PATH+'scss/*.scss'
	_writeLog log, 'file'
	log
		.pipe plumber
			errorHandler: (err)->
				_SASSConsole err
		.pipe do sass
		.pipe gulp.dest PATH+'dist/css/full'
		.pipe do cssmin
		.pipe rename
			suffix: '.min'
		.pipe gulp.dest PATH+'dist/css'
		.pipe do connect.reload

	log = gulp.src PATH+'dev-tools/dev-tools-css/scss/*.scss'
	_writeLog log, 'file'
	log
		.pipe plumber
			errorHandler: (err)->
				_SASSConsole err
		.pipe do sass
		.pipe gulp.dest PATH+'dev-tools/dev-tools-css/'
		.pipe do connect.reload

###
	@method
		name: gulp.task()::IncHTML *n
		caption:
			p{ Таск выбирет все файлы по маске bd{ 'html/-/*html' }, 
			вставляет содержимое (функции bd{ #=include '../file.coffee'}, 
			если они присутствуют) и складывает в папку bd{ 'dist' } 
			и обновляет страницу в браузере (если эта включена в 
			объекте bd{ OPTIONS }).
			p{ Так же, таск не прерывает работу сборщика в случае 
			возникновения ошибки. Сообщение об ошибке и отладочная 
			информация пишется в консоль}p
			p{ imp{ ВАЖНО. При запуске сборщика, если папка bd{ html } 
			не была удалена, html-файлы в папке bd{ dist } будут перезаписаны 
			содержимым результата обработки папки bd{ html } }imp
			Чтобы избежать потери данных не редактируйте файлы в bd{ dist },
			делайте это в папке bd{ html } }p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task 'IncHTML', ->
	log = gulp.src PATH+'html/*.html'
	_writeLog log, 'file'
	log
		.pipe plumber
			errorHandler: (err)->
		.pipe do fileinclude
		.pipe gulp.dest PATH+'dist/'
		.pipe do connect.reload

###
	@method
		name: gulp.task()::css *n
		caption:
			p{ Таск следит за изменениями в файлах по маске 
			bd{ 'dist/css/*css' } и при изменении файлов обновляет 
			страницу в браузере (если эта включена в объекте 
			bd{ OPTIONS }).}p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '    css', ->
	log = gulp.src PATH+'dist/css/*.css'
	_writeLog log, 'file'
	log.pipe do connect.reload

###
	@method
		name: gulp.task()::HTML *n
		caption:
			p{ Таск следит за изменениями в файлах по маске 
			bd{ 'dist/*html' } и при изменении файлов обновляет 
			страницу в браузере (если эта включена в объекте 
			bd{ OPTIONS }).}p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '   HTML', ->
	log = gulp.src PATH+'dist/*.html'
	_writeLog log, 'file'
	log
		.pipe do plumber
		.pipe do connect.reload

###
	@method
		name: gulp.task()::Js *n
		caption:
			p{ Таск следит за изменениями в файлах по маске 
			bd{ 'dist/js/*js' } и при изменении файлов обновляет 
			страницу в браузере (если эта включена в объекте 
			bd{ OPTIONS }).}p
			p{ imp{ ВАЖНО. При запуске сборщика, если папка bd{ coffee } 
			не была удалена, html-файлы в папке bd{ dist/js } будут перезаписаны 
			содержимым результата обработки папки bd{ coffee } }imp
			Чтобы избежать потери данных не редактируйте файлы в bd{ dist/js },
			делайте это в папке bd{ coffee } }p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '     Js', ->
	log = gulp.src PATH+'dist/js/*.js'
	_writeLog log, 'file'
	log.pipe do connect.reload

###
	@method
		name: gulp.task()::list *n
		caption:
			p{ Таск следит за изменениями в структуре файлов системы
			и формирует JSON для обработки в ADK.}p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '   list', ->
	log = gulp.src PATH+'list.json'
	_writeLog log, 'file'
	log.pipe do clean
	gulp.src [
			PATH+'dist/css/**/*css',
			PATH+'dist/js/**/*js'
			PATH+'dist/*html',
			PATH+'dist/*txt',
			PATH+'dist/*json',
		]
		.pipe filelist 'list.json'
		.pipe gulp.dest PATH+'dev-tools/'

###
	@method
		name: gulp.task()::watch *n
		caption:
			p{ Таск связывает файлы в папках с их обработчиками. 
			Задача этого таска - отслеживание ищменений в указаных 
			директориях. И выполнять действия, которые указаны в 
			случае изменения файла. }p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task '  watch', ->
	gulp.watch PATH+'coffee/*coffee', 				[' coffee']
	gulp.watch PATH+'coffee/*/*coffee',				[' coffee']
	gulp.watch PATH+'dev-tools/*/*/*coffee',	[' coffee']
	gulp.watch PATH+'scss/*.scss', 						['   sass']
	gulp.watch PATH+'scss/*/*scss', 					['   sass']
	gulp.watch PATH+'dev-tools/*/*/*scss', 		['   sass']
	gulp.watch PATH+'dist/*html', 						['   HTML']
	gulp.watch PATH+'html/*html', 						['IncHTML']
	gulp.watch PATH+'html/includes/*html', 		['IncHTML']
	gulp.watch PATH+'dist/css/*css', 					['    css']
	gulp.watch PATH+'dist/js/*js', 						['     Js']
	gulp.watch PATH+'dist/**/*', 							['   list']

#  ----------------------------------------------------------------------------
# MAIN TASK
# -----------------------------------------------------------------------------

###
	@method
		name: gulp.task()::default *n
		caption:
			p{ Главный таск-конструктор, который описывает все
			нужные таски для работы.}p
		*n
		arguments: none *n
		return: dest *n
###
gulp.task 'default', [
	' coffee'
	'  watch'
	'connect'
	'   sass'
	'   HTML'
	'IncHTML'
	'    css'
	'     Js'
	'   list'
]