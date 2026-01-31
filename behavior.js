document.addEventListener('DOMContentLoaded', function (event) {
  var thumbnailElement = document.getElementById('smart_thumbnail');
  var otherThumbnail = document.querySelectorAll('.to_change');

  //partie exigée
  if (thumbnailElement) {
    thumbnailElement.addEventListener('click', function () {
      console.log('tu tapes');
      if (thumbnailElement.className == 'small') {
        thumbnailElement.className = '';
      } else {
        thumbnailElement.className = 'small';
      }
    });
  }
  //ma création
  otherThumbnail.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      console.log('click 2');
      if (this.classList.contains('small')) {
        this.classList.remove('small');

        this.classList.add('add_class');
      } else {
        this.classList.add('small');
        this.classList.remove('add_class');
      }
    });
  });
});
