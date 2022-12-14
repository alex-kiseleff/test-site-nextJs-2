# Тестовое задание

Работа приложения здесь: [*ссылка*](https://test-site-next-js-2-l2v2rg2mb-alex-kiseleff.vercel.app/).  
Стэк: *Next.js*, *TypeScript*, *React Hooks*, *Styled-Components*.  
Обращение к API эмулированы рандомно, в случае успеха - переход на главный экран и запись данных в файл *DATA_BASE.json*.  
Верстка адаптивная, на маленьких разрешениях появляется "бургер" меню.  
В форме оплаты присутствует маска и валидация, в случае неверного ввода выводится сообщение, 
кнопка становится активной только если введенные данные валидны.  

Что беспокоит:
 - не вынесена логика из компонентов;
 - при холодном запуске, при переключении вкладок меню, идет лишний рендер;
 - возможно мало переиспользовал компоненты (но это мое первое знакомство со *Styled-Components*);
 - цвета на мониторе ноутбука "спокойные", но на внешнем мониторе они более "кислотные", переделывать не стал, не знаю какой из мониторов неверно отображает цвета;
 - нужна оптимизация и рефакторинг;
 - убрал всплывающее сообщение при случае неудачного ответа сервера;
 - возможно мало использовано защиты от *null* и *undefined*, пронадеялся на *TypeScript*;
 - не сделал плейсхолдер при вводе номера телефона, посчитал что всплывающего сообщения хватит.
