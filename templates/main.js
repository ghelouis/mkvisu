var div = document.querySelector('div');
var items = div.querySelectorAll('img');
var langFilters = document.querySelectorAll('li');
var languages = new Set();
for (var j = 0; j < langFilters.length; j++) {
  languages.add(langFilters[j].textContent);
}
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

function filterByLang(filter) {
  var lang = filter.textContent;
  if (filter.classList.contains("selected")) {
    languages.delete(lang);
    for (var i = 0; i < items.length; i++) {
      var display = false;
      for (var j = 0; j < items[i].classList.length; j++) {
        if (languages.has(items[i].classList[j])) {
          display = true;
          break;
        }
      }
      if (!display) {
        items[i].style.display = 'none';
      }
    }
  } else {
    languages.add(lang)
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(lang)) {
        items[i].style.display = '';
      }
    }
  }
  filter.classList.toggle("selected");
}
