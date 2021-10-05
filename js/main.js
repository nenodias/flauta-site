function enviar() {
  let url = document.querySelector('#form').url.value;
  if (url) {
    let pages = window.location.href.split('#');
    window.location.href = pages[0] + "#" + url;
    window.location.reload();
  }
}

(function () {
  let pages = window.location.href.split('#');
  if (pages.length > 1) {
    let url = pages[1];
    if (url) {
      notas(url);
    }
  }
})();