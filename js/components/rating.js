document.getElementById('rating').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() != 'span') return;

  if (event.target.classList.contains('checked')) {
    event.target.classList.remove('checked');
  } else {
    Array.prototype.forEach.call(document.getElementsByClassName('checked'), function(el) {
      el.classList.remove('checked');
    });
    event.target.classList.add('checked');
  }
});
