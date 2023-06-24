function toggelClass(){
    $circle.classList.toggle("light_up");
  }
  
  function removeClass(){
    if(flag === 0)return;
    $circle.style.background = '#ccc';
    $circle.style.boxShadow = '';
    $circle.classList.remove("light_up");
  }
  
  function addClass(color){
    $circle.style.background = color;
    $circle.style.boxShadow = `0 -10px 100px ${color}`;
    $circle.classList.add("light_up");
  }
  
  let $light = document.querySelector('#light');
  let $circle = document.querySelector('.circle');
  $light.addEventListener("click", toggelClass, false);
  
