document.querySelector('#btn-check').onclick = function (){
    let value = prompt ("Ведіть ваш E-mail" , "");
        if (value === '') {
            alert('Попробуйте знову');
  }

        else if (value === '') {
            alert(' ')
  }

        else {
            alert('Оформлення відміненно');
  }
}
