function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nested = document.getElementById('nested');
  return nested.querySelector('.target');
}

function increaseRankBy(n){
  var ranks = document.querySelector('.ranked-list');

  for (var i = 0; i < ranks.length; i++) {
    ranks[i] = parseInt(ranks[i]) + n;
  }
}
