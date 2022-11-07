Напишите класс Storage который будет создавать экземпляры для работы с localStorage
    Пример:
    const names = new Storage(’names’);
    names.get() // возвращает значение для ключа names в localStorage;
    names.set() // устанавливает значение для ключа names в localStorage;
    names.clear() // очищает значение для ключа names в localStorage;
    names.isEmpty() // вернет true если ключ names в localStorage имеет пустое значение (null || undefind);
Создайте несколько экземпляров класса Storage и убедитесь что все они работают правильно
Для класса Storage добавьте пару опций в конструктор
1. чтобы можно было выбирать local или session storage
2. возможность указать значение по-умолчанию (при создании экземпляра)