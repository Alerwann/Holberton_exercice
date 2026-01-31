document.addEventListener('DOMContentLoaded', function (event) {
  var formValid = document.getElementById('good_button');
  formValid.addEventListener('submit', function () {
    event.preventDefault();
    console.log('click');
    var answer = document.getElementById('answer').value;
    var imgState = document.getElementById('win_img');
    if (answer === 'merci!') {
      console.log(imgState.classList);
      imgState.classList.remove('hidden');
    } else {
      console.log(imgState.classList);
      imgState.classList.remove('hidden');
      console.log(imgState.classList);
      console.log('perdu');
    }
  });
});
