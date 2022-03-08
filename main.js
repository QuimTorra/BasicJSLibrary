import { $ } from "./jsLib.js"


let count = (localStorage.getItem("count") || 0);
const display = $('#display');
display.changeChild(count);

$('#countup').on('click', () => {
  count++;
  display.changeChild(count);
  localStorage.setItem("count", count);
});

$('#countdown').on('click', () => {
  count--;
  display.changeChild(count);
  localStorage.setItem("count", count);
});

$('#resetcount').on('click', () => {
  count = 0;
  localStorage.removeItem("count");
  display.changeChild(count);
})