const firebaseConfig = {
  apiKey: "AIzaSyBh9sET5AqFOtq-pVbD3zih_M3-88IZenc",
  authDomain: "vacani-props.firebaseapp.com",
  projectId: "vacani-props",
  storageBucket: "vacani-props.appspot.com",
  messagingSenderId: "280501608482",
  appId: "1:280501608482:web:805b732642b7b0656f2a7b",
  measurementId: "G-44KFFXT7VP",
};

firebase.initializeApp(firebaseConfig);

let modal = document.querySelector(".modal");
let body = document.querySelector("#body");
let main = document.querySelector(".main");
let header = document.querySelector(".header");
let container = document.querySelector(".main--container");
let mainBtn = document.querySelector(".header--form__btn");
let cityFilter = document.querySelector("#barCity");
let typeFilter = document.querySelector("#barType");
let propFilter = document.querySelector("#barProp");
let navHome = document.querySelectorAll(".navHome");
let navBuy = document.querySelectorAll(".navBuy");
let navAlq = document.querySelectorAll(".navAlq");
let navSell = document.querySelectorAll(".navSell");
let navFaq = document.querySelectorAll(".navFaq");
let navCont = document.querySelectorAll(".navCont");
let closeMobile = document.querySelector(".navbar--mobile__close");
let menuMobile = document.querySelector(".navbar--mobile__menu");
let openMobile = document.querySelector(".navbar--mobile");
let mainTitle = document.querySelector(".main--title");

/*FUNCION CARGAR SERVICIOS DENTRO DEL MODAL*/
const loadInfo = (services) => {
  let checkboxes = document.querySelector(".modalInfoCheck");
  checkboxes.innerHTML = " ";
  for (service in services) {
    if (services[service] == true) {
      checkboxes.innerHTML += `<li>${service}</li>`;
    }
  }
};

/*FUNCION ABRIR MODAL POR ITEM*/
const clickFunction = (items, modal, body) => {
  /*UNA VEZ QUE SE CUMPLE CON LA PETICION DE DATOS CARGAMOS LA FUNCION DE MODAL ON CLICK*/
  let cards = document.querySelectorAll(".card");

  for (card of cards) {
    card.addEventListener("click", (e) => {
      let child = e.target;
      let parent = child.parentElement;
      let dataId = parent.getAttribute("data-item");
      let modalResult = items[dataId - 1];

      /*SI TOCAMOS LA CARD Y NO ES UNO NI OTRO SE ABRE EL MODAL*/
      if (
        child.className == "card--bottom" ||
        child.className == "carousel-inner"
      ) {
        modal.style.display = "flex";
        container.style.opacity = 0;
        mainTitle.style.opacity = 0;
        const {
          id,
          title,
          price,
          exp,
          mPlain,
          mOcc,
          dorm,
          garage,
          old,
          baths,
          city,
          type,
          services,
        } = modalResult;
        let wppTxt = title.split(" ").join("+");
        setTimeout(() => {
          /*CARGAMOS LA PANTALLA DEL ITEM SELECCIONADO*/
          modal.innerHTML = `<span class="modal--close">X</span>
          <div class='modal--info'>
          <h2 class="modalTitle">
                ${title}
              </h2>
              <span class="modalPrice">${price}</span>
              ${
                exp != 0
                  ? `<span class="card--bottom__exp">+${exp}</span>`
                  : `<span class="card--bottom__exp">Sin Expensas</span>`
              }
          </div>
            <div class="modal--imgs">
              <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <form action="submit">
                <h3>Consulta por esta propiedad</h3>
                <label for="submitName">Nombre y apellido:</label>
                <input type="text" id="submitName" />
                <label for="submitMail">Mail de contacto:</label>
                <input type="email" id="submitMail" />
                <label for="submitPhone">Telefono de contacto:</label>
                <input type="text" id="submitPhone" />
                <input
                  type="button"
                  value="Quiero que me contacten"
                  id="submitBtn"
                />
                <a
                  href="https://api.whatsapp.com/send/?phone=5491130105048&text=Me+interesa+${wppTxt}"
                  id="wppBtn"
                  target="_blank"
                  >Enviar Whatsapp</a
                >
                <img src="images/logoNav.svg" alt="" />
              </form>
            </div>
            <div class="modal--info">
              <div class="modalInfo">
                <span>INFORMACION DE LA PROPIEDAD</span>
                <hr class="modalInfoLine" />
                <div class="modalInfoInd">
                  <p>Metros totales: <strong>${mPlain}</strong></p>
                  <p>Metros Cubiertos: <strong>${mOcc}</strong></p>
                  <p>Baños: <strong>${baths}</strong></p>
                  <p>Ambientes: <strong>${dorm}</strong></p>
                  <p>Cochera: <strong>${garage}</strong></p>
                  <p class='modalInfoType'>Tipo: <strong>${type}</strong></p>
                  <p>Antiguedad: <strong>${old}</strong></p>
                </div>
              </div>
              <div class="modalInfo">
                <span>DESCRIPCION DE LA PROPIEDAD</span>
                <hr class="modalInfoLine" />
                <div class="modalInfoDesc">
                  <p>
                    Se alquila monoambiente en la Av. Peron altura 2000 Victoria. Se
                    encuentra en una excelente zoan a cuadras de la estacion de
                    tren.
                  </p>
                  <p>
                    Se alquila monoambiente en la Av. Peron altura 2000 Victoria. Se
                    encuentra en una excelente zoan a cuadras de la estacion de
                    tren.
                  </p>
                  <p>
                    Se alquila monoambiente en la Av. Peron altura 2000 Victoria. Se
                    encuentra en una excelente zoan a cuadras de la estacion de
                    tren.
                  </p>
                </div>
              </div>
              <div class="modalInfo">
                <span>AMENITIES & SERVICIOS</span>
                <hr class="modalInfoLine" />
                <ul class="modalInfoCheck">
                ${setTimeout(() => {
                  loadInfo(services);
                }, 100)}
                </ul>
              </div>
              <div class="modalInfo">
                <span>UBICACION</span>
                <hr class="modalInfoLine" />
                <div class="modalInfoInd">
                  <img src="https://i.blogs.es/b4dd5c/maps/1366_2000.png" alt="" />
                </div>
              </div>
            </div>`;
          modal.style.opacity = 1;
          container.style.display = "none";
          mainTitle.style.display = "none";
          /*UNA VEZ CARGA EL MODAL, CARGAMOS LA FUNCION DE CERRAR EL MISMO*/
          let closeModal = document.querySelector(".modal--close");
          closeModal.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.opacity = 0;
            container.style.display = "flex";
            mainTitle.style.display = "flex";
            setTimeout(() => {
              modal.style.display = "none";
              container.style.opacity = 1;
              mainTitle.style.opacity = 1;
            }, 700);
          });
        }, 700);
      }
    });
  }
};

/*ABRIR MENU MOBILE*/
openMobile.addEventListener("click", () => {
  menuMobile.style.display = "flex";
  closeMobile.style.display = "flex";
  setTimeout(() => {
    menuMobile.style.opacity = 1;
    closeMobile.style.opacity = 1;
  }, 300);
});

/*CERRAR MENU MOBILE*/
closeMobile.addEventListener("click", () => {
  menuMobile.style.opacity = 0;
  closeMobile.style.opacity = 0;

  setTimeout(() => {
    menuMobile.style.display = "none";
    closeMobile.style.display = "none";
  }, 300);
});

/*FUNCION MAIN, PETICION DE INFORMACION*/
const data = new Promise((resolve, reject) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let items = data.data.items;

      /*BUSQUEDA DE ITEMS POR FILTROS*/
      mainBtn.addEventListener("click", (e) => {
        e.preventDefault();
        /*SCROLL A MAIN*/
        scroll({
          top: 320,
          behavior: "smooth",
        });
        main.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
        let filterResult = [];
        let cityFinal = cityFilter.value;
        let typeFinal = typeFilter.value;
        let propFinal = propFilter.value;
        console.log(propFinal);
        for (item in items) {
          if (cityFinal == "Todas") {
            if (
              items[item].prop == propFinal &&
              items[item].type == typeFinal
            ) {
              filterResult.push(items[item]);
            }
          } else {
            if (
              items[item].city == cityFinal &&
              items[item].type == typeFinal &&
              items[item].prop == propFinal
            ) {
              filterResult.push(items[item]);
            }
          }
        }
        console.log(filterResult.length);
        /*ESPERAMOS MEDIO SEGUNDO ANTES DE MOSTRAR EL RESULTADO DE LA BUSQUEDA*/
        setTimeout(() => {
          main.innerHTML = `<h2 class="main--title">${cityFinal}</h2><div class="main--container"></div>`;
          if (filterResult.length != 0) {
            filterResult.forEach((result) => {
              /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
              let container = document.querySelector(".main--container");
              container.innerHTML += `<article class="card" data-item=${
                result.id
              }>
                  <div class="card--top">
                    <div id="carousel${result.id}" data-item=${
                result.id
              } class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carousel${result.id}"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carousel${result.id}"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div class="card--bottom">
                    <p class="card--bottom__desc">
                      ${result.title}
                    </p>
                    <span class="card--bottom__price">${result.price}</span>
                    ${
                      result.exp != 0
                        ? `<span class="card--bottom__exp">+${result.exp}</span>`
                        : `<span class="card--bottom__exp">Sin Expensas</span>`
                    }
                    <div class="card--bottom__line"></div>
                    <div class="card--bottom__info">
                      <p><strong>40</strong> m² totales</p>
                      <p><strong>1</strong> baños</p>
                      <p><strong>40</strong> m² cubiertos</p>
                      <p><strong>1</strong> ambientes</p>
                    </div>
                  </div>
                </article>`;
            });
          } else {
            /*SI NO HAY RESULTADOS MOSTRAMOS LO SIGUIENTE*/
            console.log("hay 0 objetos");
            let container = document.querySelector(".main--container");
            container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
          }
        }, 500);
        /*FUNCION CLICK*/
        setTimeout(() => {
          clickFunction(items, modal, body);
        }, 1000);
      });

      /*LOAD GENERAL*/
      items.forEach((item) => {
        const {
          id,
          title,
          price,
          exp,
          mPlain,
          mOcc,
          dorm,
          garage,
          old,
          baths,
          city,
          type,
          services,
        } = item;
        container.innerHTML += `<article class="card" data-item=${id}>
            <div class="card--top">
              <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel${id}"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="card--bottom">
              <p class="card--bottom__type">
              ${type}
              </p>
              <p class="card--bottom__desc">
                ${title}
              </p>
              <span class="card--bottom__price">${price}</span>
              ${
                exp != 0
                  ? `<span class="card--bottom__exp">+${exp}</span>`
                  : `<span class="card--bottom__exp">Sin Expensas</span>`
              }
              <div class="card--bottom__line"></div>
              <div class="card--bottom__info">
                <p><strong>${mPlain}</strong> m² totales</p>
                <p><strong>${baths}</strong> baños</p>
                <p><strong>${mOcc}</strong> m² cubiertos</p>
                <p><strong>${dorm}</strong> ambientes</p>
              </div>
            </div>
          </article>`;
      });

      /*FUNCION CLICK*/
      clickFunction(items, modal, body);

      /*LOAD ALQUILER*/
      for (alq of navAlq) {
        alq.addEventListener("click", (e) => {
          e.preventDefault();
          menuMobile.style.opacity = 0;
          closeMobile.style.opacity = 0;

          setTimeout(() => {
            menuMobile.style.display = "none";
            closeMobile.style.display = "none";
          }, 300);
          let items = data.data.items;
          scroll({
            top: 320,
            behavior: "smooth",
          });
          main.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
          let filterResult = [];
          let cityFinal = cityFilter.value;
          typeFilter.value = "Alquiler";
          let typeFinal = "Alquiler";
          for (item in items) {
            if (items[item].type == typeFinal) {
              filterResult.push(items[item]);
            }
          }
          console.log(filterResult.length);
          /*ESPERAMOS MEDIO SEGUNDO ANTES DE MOSTRAR EL RESULTADO DE LA BUSQUEDA*/
          setTimeout(() => {
            main.innerHTML = `<h2 class="main--title">${typeFinal}</h2><div class="main--container"></div>`;
            if (filterResult.length != 0) {
              filterResult.forEach((result) => {
                /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
                let container = document.querySelector(".main--container");
                const {
                  id,
                  title,
                  price,
                  exp,
                  mPlain,
                  mOcc,
                  dorm,
                  garage,
                  old,
                  baths,
                  city,
                  type,
                  services,
                } = result;
                container.innerHTML += `<article class="card" data-item=${id}>
                      <div class="card--top">
                        <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div class="card--bottom">
                        <p class="card--bottom__type">
                        ${type}
                        </p>
                        <p class="card--bottom__desc">
                          ${title}
                        </p>
                        <span class="card--bottom__price">${price}</span>
                        ${
                          exp != 0
                            ? `<span class="card--bottom__exp">+${exp}</span>`
                            : `<span class="card--bottom__exp">Sin Expensas</span>`
                        }
                        <div class="card--bottom__line"></div>
                        <div class="card--bottom__info">
                          <p><strong>${mPlain}</strong> m² totales</p>
                          <p><strong>${baths}</strong> baños</p>
                          <p><strong>${mOcc}</strong> m² cubiertos</p>
                          <p><strong>${dorm}</strong> ambientes</p>
                        </div>
                      </div>
                    </article>`;
              });
            } else {
              /*SI NO HAY RESULTADOS MOSTRAMOS LO SIGUIENTE*/
              console.log("hay 0 objetos");
              let container = document.querySelector(".main--container");
              container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
            }
          }, 500);

          /*FUNCION CLICK*/
          setTimeout(() => {
            clickFunction(items, modal, body);
          }, 1000);
        });
      }

      /*LOAD VENTA*/
      for (buy of navBuy) {
        buy.addEventListener("click", (e) => {
          menuMobile.style.opacity = 0;
          closeMobile.style.opacity = 0;

          setTimeout(() => {
            menuMobile.style.display = "none";
            closeMobile.style.display = "none";
          }, 300);
          e.preventDefault();
          let items = data.data.items;
          scroll({
            top: 320,
            behavior: "smooth",
          });
          main.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
          let filterResult = [];
          let cityFinal = cityFilter.value;
          typeFilter.value = "Venta";
          let typeFinal = "Venta";
          for (item in items) {
            if (items[item].type == typeFinal) {
              filterResult.push(items[item]);
            }
          }
          console.log(filterResult.length);
          /*ESPERAMOS MEDIO SEGUNDO ANTES DE MOSTRAR EL RESULTADO DE LA BUSQUEDA*/
          setTimeout(() => {
            main.innerHTML = `<h2 class="main--title">${typeFinal}</h2><div class="main--container"></div>`;
            if (filterResult.length != 0) {
              filterResult.forEach((result) => {
                /*CARGA EN PANTALLA DE RESULTADOS DEL FILTRO*/
                let container = document.querySelector(".main--container");
                const {
                  id,
                  title,
                  price,
                  exp,
                  mPlain,
                  mOcc,
                  dorm,
                  garage,
                  old,
                  baths,
                  city,
                  type,
                  services,
                } = result;
                container.innerHTML += `<article class="card" data-item=${id}>
                      <div class="card--top">
                        <div id="carousel${id}" data-item=${id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/90277970-0d15-4132-8187-7232723ad98d.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/fb797201-c7f4-4da6-87c5-55836199b77a.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://d1994bulhovht.cloudfront.net/AUTOx1080/listings/a691a2d9-21a4-4eca-b5a9-14f532c91b59/23235dc5-a208-4813-acf5-e11b0143eaa1.webp"
                                class="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carousel${id}"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      <div class="card--bottom">
                        <p class="card--bottom__type">
                        ${type}
                        </p>
                        <p class="card--bottom__desc">
                          ${title}
                        </p>
                        <span class="card--bottom__price">${price}</span>
                        ${
                          exp != 0
                            ? `<span class="card--bottom__exp">+${exp}</span>`
                            : `<span class="card--bottom__exp">Sin Expensas</span>`
                        }
                        <div class="card--bottom__line"></div>
                        <div class="card--bottom__info">
                          <p><strong>${mPlain}</strong> m² totales</p>
                          <p><strong>${baths}</strong> baños</p>
                          <p><strong>${mOcc}</strong> m² cubiertos</p>
                          <p><strong>${dorm}</strong> ambientes</p>
                        </div>
                      </div>
                    </article>`;
              });
            } else {
              /*SI NO HAY RESULTADOS MOSTRAMOS LO SIGUIENTE*/
              console.log("hay 0 objetos");
              let container = document.querySelector(".main--container");
              container.innerHTML = `<p>No hay resultados para tu busqueda</p>`;
            }
          }, 500);

          /*FUNCION CLICK*/
          setTimeout(() => {
            clickFunction(items, modal, body);
          }, 1000);
        });
      }
    });
}).catch((err) => {
  reject(err);
});
