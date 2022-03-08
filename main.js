import { $, useState } from "./jsLib.js"

const [count, setCount] = $('#display').bind(0);

$('#countup').on('click', () => {
  setCount(count() + 1);
});

$('#countdown').on('click', () => {
  setCount(count() - 1);
});

$('#resetcount').on('click', () => {
  setCount(0);
});