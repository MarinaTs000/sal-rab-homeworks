function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину
     let message;  //Cоздайте переменную message
     message  = productName;  //Присвойте переменной message значение переменной productName
     message = message + " ";   //Добавьте в конец переменной message пробел
     message = message + "за";  //Добавьте в конец переменной message текст 'за'
     message = message + " ";  //добавьте в конец переменной message пробел
     message = message + productPrice;  //Добавьте в конец переменной message значение переменной productPrice
     message = message + " ";  //Добавьте в конец переменной message пробел
     message = message + "теперь в корзине!";  //Добавьте в конец переменной message текст 'теперь в корзине!'
     console.log(message);  //Выведите переменную message в консол
    // Конец решения задания №1.1.
     return message;
}

function addInCartCountChange(oldValue) {

    // Задание №1.2. Увеличение количества в корзине

    let newValue ;  // создайте переменную newValue
    newValue = oldValue;  // присвойте ей значение oldValue
    newValue = oldValue + 1 ;  // увеличьте значение newValue на 1 

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

     let newSum; 
     newSum = oldSum + difference ;// создайте переменную newSum и присвойте ей сумму oldSum и difference
     let newSumText = (newSum + ' ₽');  // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
     newSumText = `${(newSum + ' ₽')}`;  // замените склеивание, используемое в newSum Text на шаблонную строку
    
    // Конец решения задания №1.3.

    return newSumText;
}

