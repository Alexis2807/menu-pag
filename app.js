const menu = [
  {
    id: 1,
    title: "Panque con suero de leche",
    category: "Desayuno",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `El suero de leche le aporta un toque muy interesante tanto a bizcochos como a panes, incluso a risottos.`,
  },
  {
    id: 2,
    title: "Comida Doble",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: ` alimentos que se transportan durante los viajes; o bien los refrigerios que se consumen durante los recesos en los lugares de trabajo y en las escuelas.`,
  },
    {
      id: 3,
      title: "Helado godzilla",
      category: "Postres",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `alimento congelado que por lo general se hace de productos lácteos tales como leche o crema.`,
    },
    {
      id: 4,
      title: "Huevo a la mexicana",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `a tortilla francesa u omelet es un plato elaborado con huevo batido y cocinado con mantequilla o aceite, en una sartén. `,
    },
    {
      id: 5,
      title: "Hamburguesa",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.`,
    },
    {
      id: 6,
      title: "Malteada",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `El batido de leche es una bebida elaborada a base de leche o helado, que puede llevar frutas, chocolate, turrón o también helado.`,
    },
    {
      id: 7,
      title: "Hamburguesa especial",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `Las Hamburguesas de soja son una alternativa rica y sana a las hamburguesas de carne, es una receta vegetariana que hará rendirse al más carnívoro `,
    },
    {
      id: 8,
      title: "Hamburguesa mega especial",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `es una hamburguesa con carne de calidad de puerco acompañada de papas `,
    },
    {
      id: 9,
      title: "Malteada romantica",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `Malteada de chocolate, vainilla o fresa para dos personas, acompañado de un adorno`,
    },
    {
      id: 10,
      title: "Carne de res",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `Esquisita carne de res, al estilo frances muy bien decorada`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }