var div = document.querySelector('div');
var items = div.querySelectorAll('img');
var input = document.querySelector('input');
input.focus();

function filterList() {
  var filter = input.value.toLowerCase();
  for (var i = 0; i < items.length; i++) {
    if (items[i].title.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}
