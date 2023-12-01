// DOM
// 1. SELECCIÓN
// querySelector

// SELECCIONA EL CAMPO DE TEXTO
const formDataInput = document.querySelector(".form_data_input");
console.log(formDataInput);

const btn = document.querySelector(".form_data_button");
console.log(btn);

const result = document.querySelector("#result");
console.log(result);

const body = document.getElementsByTagName("body")[0];
console.log(body);

// 2. MANIPULACIÓN
// A. FUNCIONES DECLARADAS
function addDarkMode() {
  body.classList.add("page-darkmode");
  return;
}

// B. INVOCACIONES INMEDIATAS
addDarkMode();

// 3. EVENTOS
// A. FUNCIONES DECLARADAS
function handleSubmit(event) {
  // 0. DETENER EL COMPORTAMIENTO POR DEFECTO DEL CAMPO DE TEXTO (REFRESH)
  // SIEMPRE SE UTILIZA CUANDO APLICAN UN BOTÓN SUBMIT
  console.log(event);
  event.preventDefault();

  // 1. EXTRAER VALOR
  const inputValue = formDataInput.value;
  console.log(inputValue);

  // 2A. ESTABLECER EL VALOR EN ALGÚN LADO DEL HTML CON INNERHTML
  //   result.innerHTML = /* HTML */ `
  //     <div>
  //       <b>${inputValue}</b>
  //     </div>
  //   `;

  // 2B. ESTABLECER EL VALOR CON TEXTCONTENT
  result.textContent = inputValue;

  return;
}

// B. ANCLAJES
// OPCIÓN A
btn.addEventListener("click", handleSubmit);

// OPCIÓN B
// CALLBACK
// btn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("Click 2");
//   handleSubmit(event);
// });
