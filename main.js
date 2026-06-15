let bitcoinPrice = 63000;

const items = [
  {
    name: "Big Mac",
    price: 2,
    img: "https://neal.fun/spend/images/big-mac.jpg",
  },
  {
    name: "Ticket de cinéma",
    price: 12,
    img: "https://neal.fun/spend/images/movie-ticket.jpg",
  },
  {
    name: "Livre",
    price: 15,
    img: "https://neal.fun/spend/images/book.jpg",
  },
  {
    name: "Diner au homard",
    price: 45,
    img: "https://neal.fun/spend/images/lobster-dinner.jpg",
  },
  {
    name: "Jeu vidéo",
    price: 79,
    img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Pok%C3%A9mon_Pokopia_box_art.png",
  },
  {
    name: "Année de Netflix",
    price: 179,
    img: "https://neal.fun/spend/images/year-of-netflix.jpg",
  },
  {
    name: "Airpods",
    price: 199,
    img: "https://neal.fun/spend/images/airpods.jpg",
  },
  {
    name: "Drone",
    price: 350,
    img: "https://neal.fun/spend/images/drone.jpg",
  },
  {
    name: "Console de jeu",
    price: 399,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnnCYCm3zwC-wiCMKrCqYbg5bz5lcRYsi8L4jU_7ARY0UOyX9SrWe5Dsh32d02f1Efme9D1LvRfLOU4GeNxtV20NxsWkod3RLmlbGMU7yPQ9oD7C_HgvGCBH4",
  },
  {
    name: "Smartphone",
    price: 425,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaR7asB0emPwVXZZ_mA1G47ZQWqTvYI10cuuOCYELBsEvQwC_FKIjiAPeH1h2iGpPzgIYasRfBmq7MpRYg_maulHph2ruq5YeRhBOHXWNOFaPQZIToZqWBQA",
  },
  {
    name: "Portable",
    price: 599,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHk8t4YR_frQ6twsJEVdNG-ubQq9zhgTzey0yJLOZtNS-mYeaAilrfEN2wleHE4ONi6zr1N_922yrvVX8z1IhP72pIUF3N9yE3WUr5ze3_tWI4l_kn_m2U2PKI",
  },
  {
    name: "PC",
    price: 699,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWYdLNwlK9twiV-d8YxnkiCbLFufyAmptZ7JKeSdA-3sR12ACPbr-V586IPbUSCW6p1iTHo5-koZJ6WjSCiKlC1DjiQeUgoYA7E_C_CY0TDhW12dLSRsC0jQ",
  },
  {
    name: "Vélo",
    price: 800,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSQaZF0z6lmiojBXq-VnQOsn5xkoMeJDWLZGTMsAu7gYjTFtvbFB2SQzna3UDzrua3b0L5GSo1100_saeUpm3bw3NObLSEn_9uzXi2Fh_z_6mbZDQss7GdGqw",
  },
  {
    name: "Chaton",
    price: 1500,
    img: "https://neal.fun/spend/images/kitten.jpg",
  },
  {
    name: "Chiot",
    price: 1500,
    img: "https://neal.fun/spend/images/puppy.jpg",
  },
  {
    name: "Cheval",
    price: 2500,
    img: "https://neal.fun/spend/images/horse.jpg",
  },
  {
    name: "Hectare de terre agricole",
    price: 3000,
    img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
  },
  {
    name: "Sac designer",
    price: 5500,
    img: "https://neal.fun/spend/images/designer-handbag.jpg",
  },
  {
    name: "Jacuzzi",
    price: 6000,
    img: "https://neal.fun/spend/images/hot-tub.jpg",
  },
  {
    name: "Vin de luxe",
    price: 7000,
    img: "https://neal.fun/spend/images/luxury-wine.jpg",
  },
  {
    name: "Bague en diamant",
    price: 10000,
    img: "https://neal.fun/spend/images/diamond-ring.jpg",
  },
  {
    name: "Jet Ski",
    price: 12000,
    img: "https://neal.fun/spend/images/jet-ski.jpg",
  },
  {
    name: "Rolex",
    price: 15000,
    img: "https://neal.fun/spend/images/rolex.jpg",
  },
  {
    name: "Bitcoin",
    price: bitcoinPrice,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtdpHT0ufTT6RANu1VHz5xt6iZqCHOHsdtv5kIjGJIw&s=10",
  },
  {
    name: "Tesla",
    price: 75000,
    img: "https://neal.fun/spend/images/tesla.jpg",
  },
  {
    name: "Ferrari",
    price: 250000,
    img: "https://neal.fun/spend/images/ferrari.jpg",
  },
  {
    name: "École",
    price: 1500000,
    img: "https://www.nicepng.com/png/detail/36-363983_school-building-school-building-images-png.png",
  },
  {
    name: "Maison",
    price: 350000,
    img: "https://neal.fun/spend/images/single-family-home.jpg",
  },
  {
    name: "Franchise McDonalds",
    price: 1500000,
    img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
  },
  {
    name: "Yacht",
    price: 7500000,
    img: "https://neal.fun/spend/images/yacht.jpg",
  },
  {
    name: "Tank",
    price: 8000000,
    img: "https://neal.fun/spend/images/m1-abrams.jpg",
  },
  {
    name: "Formule 1",
    price: 15000000,
    img: "https://neal.fun/spend/images/formula-1-car.jpg",
  },
  {
    name: "Hélicoptère",
    price: 31000000,
    img: "https://neal.fun/spend/images/apache-helicopter.jpg",
  },
  {
    name: "Manoir",
    price: 45000000,
    img: "https://neal.fun/spend/images/mansion.jpg",
  },
  {
    name: "Place dans l'ISS",
    price: 60000000,
    img: "https://images.openai.com/static-rsc-4/VCVRlxNtMk1cmNq5IdkV-KydQb3dhsn4GmzZ2rZi9B8OK6f8iRxY-yMj9gXjR7E17sPwcuWGaLwo_8svCqNZsVQQHv_lCo7OctpclleGg_88Bb8b-VTkLXgpZYXDoYClCHG6MvRtFsnpekrNO1VgnzOb66jP_-Q93-gu2gEUyRlRv09jhPkE1Y7M6B4iifAK?purpose=fullsize",
  },
  {
    name: "Faire un film",
    price: 100000000,
    img: "https://neal.fun/spend/images/make-a-movie.jpg",
  },
  {
    name: "Jet privé",
    price: 200000000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydHywCeSBpVwSxwc6mpegEbpvvuo0Wx0FkQ&s",
  },
  {
    name: "Mona Lisa",
    price: 780000000,
    img: "https://neal.fun/spend/images/mona-lisa.jpg",
    max: 1,
  },
  {
    name: "Gratte-ciel",
    price: 850000000,
    img: "https://neal.fun/spend/images/skyscraper.jpg",
  },
  {
    name: "Bateau de croisière",
    price: 930000000,
    img: "https://neal.fun/spend/images/cruise-ship.jpg",
  },
  {
    name: "Autoroute",
    price: 20000000000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/A_20_bei_Langsdorf.jpg/250px-A_20_bei_Langsdorf.jpg",
  },
  {
    name: "Armée Belge",
    price: 25000000000,
    img: "https://rtleng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2025/05/06/node_748752/4161111/public/2025/05/06/pegggg.jpg?itok=qV7a8f8J1746548638",
    max: 1,
  },
  {
    name: "Twitter",
    price: 45000000000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1280px-Logo_of_Twitter.svg.png",
    max: 1,
  },
  {
    name: "ISS",
    price: 50000000000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnWNsOTz12KDpul37K2KuGow3WDWY8iXcmg&s",
    max: 1,
  },
  {
    name: "Nancy",
    price: 50000000000,
    img: "https://images.openai.com/static-rsc-4/-CMnp_t7OKK_YH9Y81EF77ts76R8qc9cklRJM6wQpFwQnHSXYjB4dDlHPlR_jHGqFuOseNtSlpR8cLJt4OxDM5gzHmKFcdCwEDFWi-2578SgM1XrGmaLBdwz61FxEdZ7iICQJOWrGiWe8vKLtRuyvbTiJwjwP-YHaaNT_6KfbhFJp2X-Zu-tyctKeU-RUiPX?purpose=fullsize",
    max: 1,
  },
  {
    name: "Tour Eiffel",
    price: 50000000000,
    img: "https://www.franceguide.info/fr/wp-content/uploads/sites/20/paris-champs-de-mars-tour-eiffel-hd.jpg",
    max: 1,
  },
  {
    name: "Limoges",
    price: 60000000000,
    img: "https://images.openai.com/static-rsc-4/n3tzI45t644ivE8GrogIFasyrgSCGDqeDMRJcGmGfO0-Isjx8G3lGMbDL12zU3ru2Vg5gixq3f8LWhnlPeVeU4ERPUaRQeM1otTjvFIofjGyqc-eXv6EPCJMNCJFlvyadsuSwaNF7hGwipEvyDI1xtIM4KjQcaZJKXcqjvkjDzKijELtri4JiLDJ7dQ9iOHA?purpose=fullsize",
    max: 1,
  },
  {
    name: "Droits d'exploitation de Mickey Mouse",
    price: 90000000000,
    img: "https://images.openai.com/static-rsc-4/T3xsvPs9iNzQm9nlXIotlbA_6Dj21c-xv23m3L6dn_s0SXsoyRy9GAukuRccBQ2lB6BV63bo7h5fBOUnvqdFNxT5oUe4c7XXxPtMfiKMZX8Ay_IQg53LMBSlHzQXIekGCsDQtP4kIUlPqanEhzhEAWRF9ZN51M0i5Zemq-n4_GVTgPMPznhmMRTuxCX1OYEf?purpose=fullsize",
    max: 1,
  },
  {
    name: "Toulouse",
    price: 150000000000,
    img: "https://images.openai.com/static-rsc-4/P06j3-vY0RPqJu_iRex9tsHpXX7sLAEGPtBtd0xmwpPOiA83YpNEApfaFlbkKRFrV4fX3W_IuYQ1NFn7h8N_nqzIQmELQvNq8EB21lvCOgfvgXqgOq1CxxUGqgzKdWC_rNFRmN6t7fGXiSHjodoxxcfen-Z4Sg__KksDCSWkOuiQjhh8z7tzvcZJGMh2FasS?purpose=fullsize",
    max: 1,
  },
  {
    name: "La Défense",
    price: 150000000000,
    img: "https://images.openai.com/static-rsc-4/pWNmyjrJkjP3ReOb5rAPiVJEGVf3c8qFHTIqe-EQ-28Po-3SWQMR6eyMksfi6Lh7Kw2Wp9QG3IjI1iaNovEQq80u8H222Xg0-ynsfowRJFKegse7XiTW6jZ9P6O9PlG9uIm-fRNmifOAdTR6wdgHH-B5R8Xb-E7ArNsET0siLmHlVvVrdt8BqmlVrltbhtnA?purpose=fullsize",
    max: 1,
  },
  {
    name: "Disney",
    price: 220000000000,
    img: "https://images.openai.com/static-rsc-4/D3g0fDF8EL1iv1z0PNQwcQgZMBnWdPpcwrO0vuFx3qplG4fNbHQBBNxgGgEgOWxHtblldUfvvWjP9MTjgjDeR9L3zErAAMp13guo7XEW61J60aLV-A45W409mYEjyA0e_Xb0dHSkEq8p6_vEorrn4ZmhP2j3_t4Jdi9cMLtUOIW-rHfgR9_rTu4ig4oyhOS4?purpose=fullsize",
    max: 1,
  },
  {
    name: "Armée Britannique",
    price: 250000000000,
    img: "https://t4.ftcdn.net/jpg/03/07/71/53/360_F_307715315_uhX53enrBPdSvRFLOYb31gL8KKPlreWb.jpg",
    max: 1,
  },
  {
    name: "Armée Française",
    price: 300000000000,
    img: "https://www.ifri.org/sites/default/files/migrated_files/images/thumbnails/image/shutterstock_2171152557.jpg",
    max: 1,
  },
  {
    name: "Armée Allemande",
    price: 350000000000,
    img: "https://media.lesechos.com/api/v1/images/view/5c335dac8fe56f165508ef1f/1280x720/0202627987376-web.jpg",
    max: 1,
  },
  {
    name: "Luxembourg",
    price: 500000000000,
    img: "https://images.openai.com/static-rsc-4/0Nc1yKLhihxLqZsFlrAMRKlfWdchVIp_eemX3mkUJ3sU9Zg60DCpW2rRAyE5ERsHOIAOMhUy5bqG8yp2ibG3Qhp3axd4wOpCUAHGiMerkBILhRgNiIVgabzmpQH9rCzS0CgtDSPYLdSHEmkip0O-CI3ZMkHXizU7Zm1h_Q6tpBEcm3RHYG0l4ZXCmEFEf9du?purpose=fullsize",
    max: 1,
  },
];

let money = 788423000070;
const start_money = money;
const owned = {};
items.forEach((item) => (owned[item.name] = 0));

fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
)
  .then((res) => res.json())
  .then((data) => {
    bitcoinPrice = data.bitcoin.usd;

    const bitcoinItem = items.find((item) => item.name === "Bitcoin");

    if (bitcoinItem) {
      bitcoinItem.price = bitcoinPrice;

      const priceEl = document
        .querySelector(`[data-buy="Bitcoin"]`)
        .closest(".item")
        .querySelector(".price");

      priceEl.textContent = "$" + bitcoinPrice.toLocaleString("en-US");
    }

    updateUI();
  });

const grid = document.querySelector(".grid");
items.forEach((item) => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <img height="100px" src="${item.img}">
    <p>${item.name}</p>
    <p class="price">$${item.price.toLocaleString("en-US")}</p>
    <div class="controls">
      <button class="item-sell" data-sell="${item.name}">Sell</button>
      <input pattern="number" type="number" value="0" max="999999999" class="item-input">
      <button class="item-buy" data-buy="${item.name}">Buy</button>
    </div>`;
  grid.appendChild(div);
});

function updateUI() {
  animateMoney(money);

  items.forEach((item) => {
    const q = owned[item.name];
    const max = item.max ?? Infinity;

    const sellBtn = document.querySelector(`[data-sell="${item.name}"]`);
    const buyBtn = document.querySelector(`[data-buy="${item.name}"]`);
    const input = buyBtn.closest(".item").querySelector(".item-input");

    sellBtn.disabled = q <= 0;
    buyBtn.disabled = money < item.price || q >= max;

    input.value = q;
    // On retire "input.disabled = q >= max;" pour que l'utilisateur puisse toujours taper une valeur inférieure
  });

  document.querySelector(".total").textContent =
    "$" +
    (start_money - money).toLocaleString("en-US") +
    " spent, that is approximately " +
    (((start_money - money) / start_money) * 100).toFixed(2) +
    "% of his total fortune";
}

function animateMoney(target) {
  const el = document.querySelector(".money");
  const start = parseInt(el.dataset.current || money);
  const duration = 500;
  const startTime = performance.now();
  el.dataset.current = target;
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(start + (target - start) * progress);
    el.textContent = "$" + value.toLocaleString("en-US");
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

grid.addEventListener("input", (e) => {
  const input = e.target.closest(".item-input");
  if (!input) return;

  const item = items.find(
    (i) =>
      input.closest(".item").querySelector("[data-buy]").dataset.buy === i.name,
  );

  const max = item.max ?? Infinity;
  let newQty = parseInt(input.value);

  // Si le champ est vide ou invalide, on considère que c'est 0
  if (isNaN(newQty) || newQty < 0) {
    newQty = 0;
  }

  // On bloque à la limite maximale de l'objet (ex: 1 pour Mona Lisa)
  if (newQty > max) {
    newQty = max;
  }

  const currentQty = owned[item.name];
  const diff = newQty - currentQty;

  if (diff > 0) {
    // ACHAT : On calcule combien on peut acheter au maximum avec l'argent restant
    const maxAffordable = Math.floor(money / item.price);
    const actualBuy = Math.min(diff, maxAffordable); // On achète la différence, ou le max qu'on peut s'offrir

    owned[item.name] += actualBuy;
    money -= actualBuy * item.price;
  } else if (diff < 0) {
    // VENTE : On revend la différence
    owned[item.name] += diff; // diff est négatif, donc ça soustrait la quantité
    money += Math.abs(diff) * item.price;
  }

  // Force l'interface à se mettre à jour avec les vraies valeurs validées
  updateUI();
});

grid.addEventListener("click", (e) => {
  const sell = e.target.closest("[data-sell]");
  const buy = e.target.closest("[data-buy]");

  if (sell) {
    const item = items.find((i) => i.name === sell.dataset.sell);
    if (owned[item.name] > 0) {
      owned[item.name]--;
      money += item.price;
      updateUI();
    }
  }

  if (buy) {
    const item = items.find((i) => i.name === buy.dataset.buy);
    const current = owned[item.name];
    const max = item.max ?? Infinity;

    if (money >= item.price && current < max) {
      owned[item.name]++;
      money -= item.price;
      updateUI();
    }
  }
});

updateUI();
