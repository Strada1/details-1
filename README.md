# 26 практика

Пример:
const names = new Storage(’names’);
names.get() возвращает значение для ключа names в localStorage;
names.set() устанавливает значение для ключа names в localStorage;
names.clear()  очищает значение для ключа names в localStorage;
names.isEmpty() вернет true если ключ names в localStorage имеет пустое значение (null || undefind);
Для класса Storage добавьте пару опций в конструктор
чтобы можно было выбирать local или session storage
возможность указать значение по - умолчанию(при создании экземпляра)