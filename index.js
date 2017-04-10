function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let grande = document.getElementById('grand-node')
  let childy = grande.children[0]

  while (childy) {
    grande = childy;
    childy = grande.children[0];
  }

  return grande;
}

function increaseRankBy(n) {
  let lists = document.getElementsByClassName('ranked-list');
  
  for(let i = 0, l = lists.length; i < l; i++) {
    for(let a = 0, z = lists[i].children.length; a < z; a++) {
      let update = lists[i].children[a].innerHTML;
      lists[i].children[a].innerHTML = parseInt(update, 10) + n;
    }
  }
}