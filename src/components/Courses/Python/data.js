export const DATA_ARRAY = [
  {
    title: "Возможности языка python",
    description: `
	
	Так как мне часто стали задавать вопросы о том, чем может быть полезен Python, я решил написать небольшую обзорную статью на эту тему.

Вот лишь некоторые вещи, которые умеет делать python:

Работа с xml/html файлами
Работа с http запросами
GUI (графический интерфейс)
Создание веб-сценариев
Работа с FTP
Работа с изображениями, аудио и видео файлами
Робототехника
Программирование математических и научных вычислений
И многое, многое другое...

Таким образом, python подходит для решения львиной доли повседневных задач, будь то резервное копирование, чтение электронной почты, либо же какая-нибудь игрушка. Язык программирования Python практически ничем не ограничен, поэтому также может использоваться в крупных проектах. К примеру, python интенсивно применяется IT-гигантами, такими как, например, Google и Yandex. К тому же простота и универсальность python делают его одним из лучших языков программирования.
	`,
    task: `Возможности языка python`,
  },
   {
    title: "Скачать Python",
    description: `
	Сегодня мы поговорим о том, как скачать и установить python 3 на свой компьютер. Бесплатно, без регистрации и SMS :)

Установка Python на Windows
Скачивать python будем с официального сайта. Кстати, не рекомендую скачивать интерпретатор python с других сайтов или через торрент, в них могут быть вирусы. Программа бесплатная. Заходим на https://python.org/downloads/windows/, выбираем "latest python release" и python 3.

На python 2 могут не работать некоторые мои примеры программ.
На момент написания статьи это python 3.4.1.

Загрузка Python - шаг 1. Обязательно выбираем python 3

Появляется страница с описанием данной версии Python (на английском). Если интересно - можете почитать. Затем крутим в самый низ страницы, а затем открываем "download page".

Загрузка Python - шаг 2

Вы увидите список файлов, которые можно загрузить. Нам нужен Windows x86 MSI installer (если система 32-х битная), или Windows x86-64 MSI installer (если система 64-х битная). Больше из файлов нам ничего не нужно.

Загрузка Python - шаг 3

Ждём, пока python загрузится. Затем открываем загрузившийся файл. Файл подписан Python Software Foundation, значит, все в порядке. Пользуясь случаем, напоминаю, что не стоит открывать незнакомые exe файлы.

Установка Python - шаг 1

Устанавливаем для всех пользователей или только для одного (на ваше усмотрение).

Установка Python - шаг 2

Выбираем папку для установки. Я оставляю папку по умолчанию. Вы можете выбрать любую папку на своем диске.

Установка Python - шаг 3

Выбираем компоненты, которые будут установлены. Оставьте компоненты по умолчанию, если не уверены.

Установка Python - шаг 4

Ждем установки python...

Finish. Поздравляю, вы установили Python! Также в установщик python для windows встроена среда разработки IDLE. Прямо сейчас вы можете написать свою первую программу!

Установка Python на linux системы (ubuntu, linux mint и другие)
Откройте консоль (обычно ctrl+alt+t). Введите в консоли:

python3
Скорее всего, вас любезно поприветствует python 3:

Python 3.4.0 (default, Apr 11 2014, 13:05:11)
[GCC 4.8.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
Если это так, то можно вас поздравить: у вас уже стоит python 3. В противном случае нужно установить пакет *python3*:

sudo apt-get install python3
Либо через mintinstaller / synaptic / центр приложений ubuntu / что вам больше нравится.

В python для linux нет предустановленной среды IDLE. Если хотите, её можно установить отдельно. Пакет называется *idle3* (в более ранних версиях он может называться python3-idle).

Однако, её установка не является обязательной. Вы можете писать в своём любимом текстовом редакторе (gedit, vim, emacs...) и запускать программы через консоль:

python3 path_to_file.py
Теперь вы можете написать первую программу (хотите, пишите в IDLE, хотите - в своём любимом текстовом редакторе).
	`,
    task: `установите и запустите python`,
  },
    {
    title: "Первая программа. Среда разработки IDLE",
    description: `
	Сегодня мы напишем свою первую программу в среде разработки IDLE.

После загрузки и установки python открываем IDLE (среда разработки на языке Python, поставляемая вместе с дистрибутивом).

Здесь и далее буду приводить примеры под ОС Windows, так как именно она у меня сейчас под рукой.

Запуск IDLE из меню Пуск

Запускаем IDLE (изначально запускается в интерактивном режиме), после чего уже можно начинать писать первую программу. Традиционно, первой программой у нас будет "hello world".

Чтобы написать "hello world" на python, достаточно всего одной строки:

print("Hello world!")
Вводим этот код в IDLE и нажимаем Enter. Результат виден на картинке:

Первая программа на python

Поздравляю! Вы написали свою первую программу на python! (если что-то не работает).

С интерактивным режимом мы немного познакомились, можете с ним ещё поиграться, например, написать

print(3 + 4)
print(3 * 5)
print(3 ** 2)
Но, всё-таки, интерактивный режим не будет являться основным. В основном, вы будете сохранять программный код в файл и запускать уже файл.

Для того, чтобы создать новое окно, в интерактивном режиме IDLE выберите File → New File (или нажмите Ctrl + N).

Открытие нового окна в IDLE

В открывшемся окне введите следующий код:

name = input("Как Вас зовут? ")
print("Привет,", name)
Первая строка печатает вопрос ("Как Вас зовут? "), ожидает, пока вы не напечатаете что-нибудь и не нажмёте Enter и сохраняет введённое значение в переменной name.

Во второй строке мы используем функцию print для вывода текста на экран, в данном случае для вывода "Привет, " и того, что хранится в переменной "name".

Теперь нажмём F5 (или выберем в меню IDLE Run → Run Module) и убедимся, что то, что мы написали, работает. Перед запуском IDLE предложит нам сохранить файл. Сохраним туда, куда вам будет удобно, после чего программа запустится.

Вы должны увидеть что-то наподобие этого (на скриншоте слева - файл с написанной вами программой, справа - результат её работы):

Запуск программы в IDLE

Поздравляю! Вы научились писать простейшие программы, а также познакомились со средой разработки IDLE. Теперь можно немного отдохнуть, а потом начать изучать python дальше. Можете посмотреть синтаксис python, циклы или условия. Желаю удачи!
	`,
    task: `установите IDE`,
  },
    {
    title: "Синтаксис языка Python",
    description: `
	Синтаксис языка Python, как и сам язык, очень прост.

Синтаксис
Конец строки является концом инструкции (точка с запятой не требуется).

Вложенные инструкции объединяются в блоки по величине отступов. Отступ может быть любым, главное, чтобы в пределах одного вложенного блока отступ был одинаков. И про читаемость кода не забывайте. Отступ в 1 пробел, к примеру, не лучшее решение. Используйте 4 пробела (или знак табуляции, на худой конец).

Вложенные инструкции в Python записываются в соответствии с одним и тем же шаблоном, когда основная инструкция завершается двоеточием, вслед за которым располагается вложенный блок кода, обычно с отступом под строкой основной инструкции.

Основная инструкция:
    Вложенный блок инструкций
Несколько специальных случаев
Иногда возможно записать несколько инструкций в одной строке, разделяя их точкой с запятой:

a = 1; b = 2; print(a, b)
Но не делайте это слишком часто! Помните об удобочитаемости. А лучше вообще так не делайте.

Допустимо записывать одну инструкцию в нескольких строках. Достаточно ее заключить в пару круглых, квадратных или фигурных скобок:

if (a == 1 and b == 2 and
    c == 3 and d == 4):  # Не забываем про двоеточие
      print('spam' * 3)
Тело составной инструкции может располагаться в той же строке, что и тело основной, если тело составной инструкции не содержит составных инструкций. Ну я думаю, вы поняли :). Давайте лучше пример приведу:

if x > y: print(x)
Полное понимание синтаксиса, конечно, приходит с опытом, поэтому я советую вам заглянуть в рубрику "Примеры программ".

Также советую прочитать PEP 8 — руководство по написанию кода на Python и Документирование кода в Python. PEP 257.
	`,
    task: `Нужены ли точки с запятой в python?`,
  },
    {
    title: "Инструкция if-elif-else, проверка истинности, трехместное выражение if/else",
    description: `
	
Условная инструкция if-elif-else (её ещё иногда называют оператором ветвления) - основной инструмент выбора в Python. Проще говоря, она выбирает, какое действие следует выполнить, в зависимости от значения переменных в момент проверки условия.

Синтаксис инструкции if
Сначала записывается часть if с условным выражением, далее могут следовать одна или более необязательных частей elif, и, наконец, необязательная часть else. Общая форма записи условной инструкции if выглядит следующим образом:

if test1:
    state1
elif test2:
    state2
else:
    state3
Простой пример (напечатает 'true', так как 1 - истина):

>>> if 1:
...     print('true')
... else:
...     print('false')
...
true
Чуть более сложный пример (его результат будет зависеть от того, что ввёл пользователь):

a = int(input())
if a < -5:
    print('Low')
elif -5 <= a <= 5:
    print('Mid')
else:
    print('High')
Конструкция с несколькими elif может также служить отличной заменой конструкции switch - case в других языках программирования.

Проверка истинности в Python
Любое число, не равное 0, или непустой объект - истина.
Числа, равные 0, пустые объекты и значение None - ложь
Операции сравнения применяются к структурам данных рекурсивно
Операции сравнения возвращают True или False
Логические операторы and и or возвращают истинный или ложный объект-операнд
Логические операторы:

X and Y
Истина, если оба значения X и Y истинны.

X or Y
Истина, если хотя бы одно из значений X или Y истинно.

not X
Истина, если X ложно.

Трехместное выражение if/else
Следующая инструкция:

if X:
    A = Y
else:
    A = Z
довольно короткая, но, тем не менее, занимает целых 4 строки. Специально для таких случаев и было придумано выражение if/else:

A = Y if X else Z
В данной инструкции интерпретатор выполнит выражение Y, если X истинно, в противном случае выполнится выражение Z.

>>>
>>> A = 't' if 'spam' else 'f'
>>> A
't'
	`,
    task: `Инструкция if-elif-else,?`,
  },
    {
    title: "Циклы for и while, операторы break и continue, волшебное слово else",
    description: `
	В этой статье я расскажу о циклах for и while, операторах break и continue, а также о слове else, которое, будучи употребленное с циклом, может сделать программный код несколько более понятным.

Цикл while
While - один из самых универсальных циклов в Python, поэтому довольно медленный. Выполняет тело цикла до тех пор, пока условие цикла истинно.

>>>
>>> i = 5
>>> while i < 15:
...     print(i)
...     i = i + 2
...
5
7
9
11
13
Цикл for
Цикл for уже чуточку сложнее, чуть менее универсальный, но выполняется гораздо быстрее цикла while. Этот цикл проходится по любому итерируемому объекту (например строке или списку), и во время каждого прохода выполняет тело цикла.

>>>
>>> for i in 'hello world':
...     print(i * 2, end='')
...
hheelllloo  wwoorrlldd
Оператор continue
Оператор continue начинает следующий проход цикла, минуя оставшееся тело цикла (for или while)

>>>
>>> for i in 'hello world':
...     if i == 'o':
...         continue
...     print(i * 2, end='')
...
hheellll  wwrrlldd
Оператор break
Оператор break досрочно прерывает цикл.

>>>
>>> for i in 'hello world':
...     if i == 'o':
...         break
...     print(i * 2, end='')
...
hheellll
Волшебное слово else
Слово else, примененное в цикле for или while, проверяет, был ли произведен выход из цикла инструкцией break, или же "естественным" образом. Блок инструкций внутри else выполнится только в том случае, если выход из цикла произошел без помощи break.

>>>
>>> for i in 'hello world':
...     if i == 'a':
...         break
... else:
...     print('Буквы a в строке нет')
...
Буквы a в строке нет
	`,
    task: `Напишите программу поска суммы чисел от 1 до 48`,
  },
    {
    title: "Встроенные функции",
    description: `
	Краткий обзор встроенных функций в Python 3.

Встроенные функции, выполняющие преобразование типов
bool(x) - преобразование к типу bool, использующая стандартную процедуру проверки истинности. Если х является ложным или опущен, возвращает значение False, в противном случае она возвращает True.

bytearray([источник [, кодировка [ошибки]]]) - преобразование к bytearray. Bytearray - изменяемая последовательность целых чисел в диапазоне 0≤X<256. Вызванная без аргументов, возвращает пустой массив байт.

bytes([источник [, кодировка [ошибки]]]) - возвращает объект типа bytes, который является неизменяемой последовательностью целых чисел в диапазоне 0≤X<256. Аргументы конструктора интерпретируются как для bytearray().

complex([real[, imag]]) - преобразование к комплексному числу.

dict([object]) - преобразование к словарю.

float([X]) - преобразование к числу с плавающей точкой. Если аргумент не указан, возвращается 0.0.

frozenset([последовательность]) - возвращает неизменяемое множество.

int([object], [основание системы счисления]) - преобразование к целому числу.

list([object]) - создает список.

memoryview([object]) - создает объект memoryview.

object() - возвращает безликий объект, являющийся базовым для всех объектов.

range([start=0], stop, [step=1]) - арифметическая прогрессия от start до stop с шагом step.

set([object]) - создает множество.

slice([start=0], stop, [step=1]) - объект среза от start до stop с шагом step.

str([object], [кодировка], [ошибки]) - строковое представление объекта. Использует метод __str__.

tuple(obj) - преобразование к кортежу.

Другие встроенные функции
abs(x) - Возвращает абсолютную величину (модуль числа).

all(последовательность) - Возвращает True, если все элементы истинные (или, если последовательность пуста).

any(последовательность) - Возвращает True, если хотя бы один элемент - истина. Для пустой последовательности возвращает False.

ascii(object) - Как repr(), возвращает строку, содержащую представление объекта, но заменяет не-ASCII символы на экранированные последовательности.

bin(x) - Преобразование целого числа в двоичную строку.

callable(x) - Возвращает True для объекта, поддерживающего вызов (как функции).

chr(x) - Возвращает односимвольную строку, код символа которой равен x.

classmethod(x) - Представляет указанную функцию методом класса.

compile(source, filename, mode, flags=0, dont_inherit=False) - Компиляция в программный код, который впоследствии может выполниться функцией eval или exec. Строка не должна содержать символов возврата каретки или нулевые байты.

delattr(object, name) - Удаляет атрибут с именем 'name'.

dir([object]) - Список имен объекта, а если объект не указан, список имен в текущей локальной области видимости.

divmod(a, b) - Возвращает частное и остаток от деления a на b.

enumerate(iterable, start=0) - Возвращает итератор, при каждом проходе предоставляющем кортеж из номера и соответствующего члена последовательности.

eval(expression, globals=None, locals=None) - Выполняет строку программного кода.

exec(object[, globals[, locals]]) - Выполняет программный код на Python.

filter(function, iterable) - Возвращает итератор из тех элементов, для которых function возвращает истину.

format(value[,format_spec]) - Форматирование (обычно форматирование строки).

getattr(object, name ,[default]) - извлекает атрибут объекта или default.

globals() - Словарь глобальных имен.

hasattr(object, name) - Имеет ли объект атрибут с именем 'name'.

hash(x) - Возвращает хеш указанного объекта.

help([object]) - Вызов встроенной справочной системы.

hex(х) - Преобразование целого числа в шестнадцатеричную строку.

id(object) - Возвращает "адрес" объекта. Это целое число, которое гарантированно будет уникальным и постоянным для данного объекта в течение срока его существования.

input([prompt]) - Возвращает введенную пользователем строку. Prompt - подсказка пользователю.

isinstance(object, ClassInfo) - Истина, если объект является экземпляром ClassInfo или его подклассом. Если объект не является объектом данного типа, функция всегда возвращает ложь.

issubclass(класс, ClassInfo) - Истина, если класс является подклассом ClassInfo. Класс считается подклассом себя.

iter(x) - Возвращает объект итератора.

len(x) - Возвращает число элементов в указанном объекте.

locals() - Словарь локальных имен.

map(function, iterator) - Итератор, получившийся после применения к каждому элементу последовательности функции function.

max(iter, [args ...] * [, key]) - Максимальный элемент последовательности.

min(iter, [args ...] * [, key]) - Минимальный элемент последовательности.

next(x) - Возвращает следующий элемент итератора.

oct(х) - Преобразование целого числа в восьмеричную строку.

open(file, mode='r', buffering=None, encoding=None, errors=None, newline=None, closefd=True) - Открывает файл и возвращает соответствующий поток.

ord(с) - Код символа.

pow(x, y[, r]) - ( x ** y ) % r.

reversed(object) - Итератор из развернутого объекта.

repr(obj) - Представление объекта.

print([object, ...], *, sep=" ", end='\n', file=sys.stdout) - Печать.

property(fget=None, fset=None, fdel=None, doc=None)

round(X [, N]) - Округление до N знаков после запятой.

setattr(объект, имя, значение) - Устанавливает атрибут объекта.

sorted(iterable[, key][, reverse]) - Отсортированный список.

staticmethod(function) - Статический метод для функции.

sum(iter, start=0) - Сумма членов последовательности.

super([тип [, объект или тип]]) - Доступ к родительскому классу.

type(object) - Возвращает тип объекта.

type(name, bases, dict) - Возвращает новый экземпляр класса name.

vars([object]) - Словарь из атрибутов объекта. По умолчанию - словарь локальных имен.

zip(*iters) - Итератор, возвращающий кортежи, состоящие из соответствующих элементов аргументов-последовательностей.
	`,
    task: `Встроенные функции?`,
  },
    {
    title: "Исключения в python. Конструкция try - except для обработки исключений",
    description: `
	Исключения (exceptions) - ещё один тип данных в python. Исключения необходимы для того, чтобы сообщать программисту об ошибках.

Самый простейший пример исключения - деление на ноль:

>>>
>>> 100 / 0
Traceback (most recent call last):
  File "", line 1, in
    100 / 0
ZeroDivisionError: division by zero
Разберём это сообщение подробнее: интерпретатор нам сообщает о том, что он поймал исключение и напечатал информацию (Traceback (most recent call last)).

Далее имя файла (File ""). Имя пустое, потому что мы находимся в интерактивном режиме, строка в файле (line 1);

Выражение, в котором произошла ошибка (100 / 0).

Название исключения (ZeroDivisionError) и краткое описание исключения (division by zero).

Разумеется, возможны и другие исключения:

>>>
>>> 2 + '1'
Traceback (most recent call last):
  File "", line 1, in
    2 + '1'
TypeError: unsupported operand type(s) for +: 'int' and 'str'

>>> int('qwerty')
Traceback (most recent call last):
  File "", line 1, in
    int('qwerty')
ValueError: invalid literal for int() with base 10: 'qwerty'
В этих двух примерах генерируются исключения TypeError и ValueError соответственно. Подсказки дают нам полную информацию о том, где порождено исключение, и с чем оно связано.

Рассмотрим иерархию встроенных в python исключений, хотя иногда вам могут встретиться и другие, так как программисты могут создавать собственные исключения. Данный список актуален для python 3.3, в более ранних версиях есть незначительные изменения.

BaseException - базовое исключение, от которого берут начало все остальные.
SystemExit - исключение, порождаемое функцией sys.exit при выходе из программы.
KeyboardInterrupt - порождается при прерывании программы пользователем (обычно сочетанием клавиш Ctrl+C).
GeneratorExit - порождается при вызове метода close объекта generator.
Exception - а вот тут уже заканчиваются полностью системные исключения (которые лучше не трогать) и начинаются обыкновенные, с которыми можно работать.
StopIteration - порождается встроенной функцией next, если в итераторе больше нет элементов.
ArithmeticError - арифметическая ошибка.
FloatingPointError - порождается при неудачном выполнении операции с плавающей запятой. На практике встречается нечасто.
OverflowError - возникает, когда результат арифметической операции слишком велик для представления. Не появляется при обычной работе с целыми числами (так как python поддерживает длинные числа), но может возникать в некоторых других случаях.
ZeroDivisionError - деление на ноль.
AssertionError - выражение в функции assert ложно.
AttributeError - объект не имеет данного атрибута (значения или метода).
BufferError - операция, связанная с буфером, не может быть выполнена.
EOFError - функция наткнулась на конец файла и не смогла прочитать то, что хотела.
ImportError - не удалось импортирование модуля или его атрибута.
LookupError - некорректный индекс или ключ.
IndexError - индекс не входит в диапазон элементов.
KeyError - несуществующий ключ (в словаре, множестве или другом объекте).
MemoryError - недостаточно памяти.
NameError - не найдено переменной с таким именем.
UnboundLocalError - сделана ссылка на локальную переменную в функции, но переменная не определена ранее.
OSError - ошибка, связанная с системой.
BlockingIOError
ChildProcessError - неудача при операции с дочерним процессом.
ConnectionError - базовый класс для исключений, связанных с подключениями.
BrokenPipeError
ConnectionAbortedError
ConnectionRefusedError
ConnectionResetError
FileExistsError - попытка создания файла или директории, которая уже существует.
FileNotFoundError - файл или директория не существует.
InterruptedError - системный вызов прерван входящим сигналом.
IsADirectoryError - ожидался файл, но это директория.
NotADirectoryError - ожидалась директория, но это файл.
PermissionError - не хватает прав доступа.
ProcessLookupError - указанного процесса не существует.
TimeoutError - закончилось время ожидания.
ReferenceError - попытка доступа к атрибуту со слабой ссылкой.
RuntimeError - возникает, когда исключение не попадает ни под одну из других категорий.
NotImplementedError - возникает, когда абстрактные методы класса требуют переопределения в дочерних классах.
SyntaxError - синтаксическая ошибка.
IndentationError - неправильные отступы.
TabError - смешивание в отступах табуляции и пробелов.
SystemError - внутренняя ошибка.
TypeError - операция применена к объекту несоответствующего типа.
ValueError - функция получает аргумент правильного типа, но некорректного значения.
UnicodeError - ошибка, связанная с кодированием / раскодированием unicode в строках.
UnicodeEncodeError - исключение, связанное с кодированием unicode.
UnicodeDecodeError - исключение, связанное с декодированием unicode.
UnicodeTranslateError - исключение, связанное с переводом unicode.
Warning - предупреждение.
Теперь, зная, когда и при каких обстоятельствах могут возникнуть исключения, мы можем их обрабатывать. Для обработки исключений используется конструкция try - except.

Первый пример применения этой конструкции:

>>>
>>> try:
...     k = 1 / 0
... except ZeroDivisionError:
...     k = 0
...
>>> print(k)
0
В блоке try мы выполняем инструкцию, которая может породить исключение, а в блоке except мы перехватываем их. При этом перехватываются как само исключение, так и его потомки. Например, перехватывая ArithmeticError, мы также перехватываем FloatingPointError, OverflowError и ZeroDivisionError.

>>>
>>> try:
...     k = 1 / 0
... except ArithmeticError:
...     k = 0
...
>>> print(k)
0
Также возможна инструкция except без аргументов, которая перехватывает вообще всё (и прерывание с клавиатуры, и системный выход и т. д.). Поэтому в такой форме инструкция except практически не используется, а используется except Exception. Однако чаще всего перехватывают исключения по одному, для упрощения отладки (вдруг вы ещё другую ошибку сделаете, а except её перехватит).

Ещё две инструкции, относящиеся к нашей проблеме, это finally и else. Finally выполняет блок инструкций в любом случае, было ли исключение, или нет (применима, когда нужно непременно что-то сделать, к примеру, закрыть файл). Инструкция else выполняется в том случае, если исключения не было.

>>> f = open('1.txt')
>>> ints = []
>>> try:
...     for line in f:
...         ints.append(int(line))
... except ValueError:
...     print('Это не число. Выходим.')
... except Exception:
...     print('Это что ещё такое?')
... else:
...     print('Всё хорошо.')
... finally:
...     f.close()
...     print('Я закрыл файл.')
...     # Именно в таком порядке: try, группа except, затем else, и только потом finally.
...
Это не число. Выходим.
Я закрыл файл.
	`,
    task: `напишите пррограмму с обработкой исключительных ситуайий при вводе 2 положиельных чисел и посика суммы `,
  },
];