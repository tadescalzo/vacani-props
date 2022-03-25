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

let modal = document.querySelector('.modal')
let body = document.querySelector('#body')
let main = document.querySelector('.main--container')

const loadInfo = (services) =>{
  let checkboxes = document.querySelector('.modalInfoCheck')
  checkboxes.innerHTML= ' '
  for (service in services){
    console.log(service, services);

    checkboxes.innerHTML += `<li>${service}</li>`
  }
}

const data = new Promise((resolve, reject) => {
  fetch('data.json')
      .then(response => response.json()).then(data=>{
        let items = data.data.items

        items.forEach(item => {
          main.innerHTML +=
          `<article class="card" data-item=${item.id}>
          <div class="card--top">
            <div id="carousel${item.id}" data-item=${item.id} class="carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-pause="hover">
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
                data-bs-target="#carousel${item.id}"
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
                data-bs-target="#carousel${item.id}"
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
              ${item.title}
            </p>
            <span class="card--bottom__price">${item.price}</span>
            ${item.exp != 0 ? `<span class="card--bottom__exp">+${item.exp}</span>` : `<span class="card--bottom__exp">Sin Expensas</span>`}
            <div class="card--bottom__line"></div>
            <div class="card--bottom__info">
              <p><strong>40</strong> m² totales</p>
              <p><strong>1</strong> baños</p>
              <p><strong>40</strong> m² cubiertos</p>
              <p><strong>1</strong> ambientes</p>
            </div>
          </div>
        </article>`
        });
        /*UNA VEZ QUE SE CUMPLE CON LA PETICION DE DATOS CARGAMOS LA FUNCION DE MODAL ON CLICK*/
        let cards = document.querySelectorAll(".card");

        for (card of cards) {
          card.addEventListener("click", (e) => {
            let child = e.target;
            let parent = child.parentElement;
            let dataId = parent.getAttribute('data-item')
            let modalResult = items[dataId-1]
            console.log(modalResult);
            if (child.className == 'card--bottom' || child.className=='carousel-inner'){
              modal.style.display='flex'
              body.style.overflowY='hidden'
              const {id,title,price,exp,mPlain, mOcc, dorm, garage,old, baths, services} = modalResult
              let wppTxt = title.split(' ').join('+')
              console.log(wppTxt);
              setTimeout(()=>{
                modal.innerHTML =
                `<span class="modal--close">X</span>
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
                  </form>
                </div>
                <div class="modal--info">
                  <h2 class="modalTitle">
                    ${title}
                  </h2>
                  <span class="modalPrice">${price}</span>
                  ${exp != 0 ? `<span class="card--bottom__exp">+${exp}</span>` : `<span class="card--bottom__exp">Sin Expensas</span>`}
                  <div class="modalInfo">
                    <span>INFORMACION DE LA PROPIEDAD</span>
                    <hr class="modalInfoLine" />
                    <div class="modalInfoInd">
                      <p>Metros totales: <strong>${mPlain}</strong></p>
                      <p>Metros Cubiertos: <strong>${mOcc}</strong></p>
                      <p>Baños: <strong>${baths}</strong></p>
                      <p>Ambientes: <strong>${dorm}</strong></p>
                      <p>Cochera: <strong>${garage}</strong></p>
                      <p>Tipo: <strong>Alquiler</strong></p>
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
                      loadInfo(services)
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
                </div>`
                modal.style.opacity=1; 
                /*UNA VEZ CARGA EL MODAL, CARGAMOS LA FUNCION DE CERRAR EL MISMO*/
                let closeModal = document.querySelector('.modal--close')
                closeModal.addEventListener('click', (e)=>{
                  let modalInfoCheck = document.querySelector('.modalInfoCheck')
                  e.preventDefault()
                  modal.style.opacity=0; 
                  body.style.overflowY='auto'
                  setTimeout(()=>{
                    modal.style.display='none'
                  },700)
                  })
              },700)

              
              
            }
            
          });
        }
      })
      }).catch(err => {
          reject(err)
   })
  