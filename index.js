function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}
