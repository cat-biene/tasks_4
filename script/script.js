// 1. Задача: Изменение текста элемента

// Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

const elem = document.querySelector('p');
elem.innerText = "Привет, JavaScript!";

// 2. Задача: Добавление нового элемента в DOM

// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив и создает нумерованный список из этих строк в html документе.

const words = ['bike', 'car', 'bus'];

function createNumberList(arr) {
  const container = document.createElement('ol'); // создаем новый элемент <ol> (нумерованный список)

  arr.forEach(elem => {
    const listElem = document.createElement('li'); // создаем элемент <li> (элемент списка)
    listElem.textContent = elem; // устанавливаем текст элемента списка
    container.appendChild(listElem); // добавляем элемент списка в нумерованный список
  });

  document.body.appendChild(container); // добавляем нумерованный список в тело документа
}

createNumberList(words);

// 3. Задача: Создание ссылок

// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

const array = [
    { 
        label: "Google", 
        link: "https://www.google.com" 
    },
    { 
        label: "Facebook", 
        link: "https://www.facebook.com" 
    },
    { 
        label: "Twitter", 
        link: "https://twitter.com" 
    }
  ];

  function creatLiks(arr) {
    const contiener = document.createElement('div');

    // Проходим по массиву объектов
    arr.forEach(elem => {

        // Создаем элемент ссылки
        const linkElem = document.createElement('a');

        // Устанавливаем атрибут href для указания адреса ссылки
        linkElem.href = elem.link;

        // Устанавливаем текст ссылки
        linkElem.textContent = elem.label;

        // Добавляем ссылку в контейнер
        contiener.appendChild(linkElem);
    });
    document.body.appendChild(contiener);
  };
  creatLiks(array);
