const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Cheat mode activated!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
