'use strict';

const shopList = [
    {
        title: "Richka",
        description: "Біля 8-го кварталу і магазину Velox",
        workSchedule: "четверг - понеділок 9:00 - 18:00",
        extraWorkSchedule: "вівторок 9:00 - 15:00",
        shopGallery: ["./img/1-richka8kv.jpg", "./img/2-richka8kv.jpg", "./img/3-richka8kv.jpg", "./img/4-richka8kv.jpg"],
        prices: ["./img/3-richka8kv.jpg"],
        googleMaps: "https://goo.gl/maps/jmyaVMKgd2Fg1SxWA",
        id: "001"
    },
    {
        title: "Nekrasova",
        description: "Прехрестя Некрасова и Электрометалургов",
        workSchedule: "понеділок - неділя 9:00 - 18:00",
        extraWorkSchedule: "у день перед оновленням товару працює до 11:00",
        shopGallery: ["./img/5-nekrasova.jpg", "./img/6-nekrasova.jpg"],
        prices: ["60", "20", "340", "299", "244", "191", "134"],
        googleMaps: "https://goo.gl/maps/URWgK4uZrr9e67Kw7",
        id: "002"
    },
    {
        title: "Big Shop",
        description: "Кристал",
        workSchedule: "вівторок - неділя 8:00 - 19:00",
        extraWorkSchedule: "понеділок до 14:00",
        shopGallery: ["./img/7-bigShopKristal.jpg", "./img/8-bigShopKristal.jpg", "./img/9-bigShopKristal.jpg"],
        prices: ["103", "43", "360", "339", "305", "238", "164"],
        googleMaps: "https://goo.gl/maps/YTD5mMA2d89Fxf4Q7",
        id: "003"
    },
    {
        title: "Big Shop",
        description: "Центральний ринок",
        workSchedule: "п'ятниця - середа 8:00 - 19:00",
        extraWorkSchedule: "четверг 8:00 - 15:00",
        shopGallery: ["./img/10-bigShopRunok.jpg", "./img/11-bigShopRunok.jpg", "./img/12-bigShopRunok.jpg", "./img/13-bigShopRunok.jpg"],
        prices: ["305", "238", "164", "103", "43", "360", "339"],
        googleMaps: "https://goo.gl/maps/Kt1PF5jNXaarMroq6",
        id: "004"
    },
    {
        title: "Richka",
        description: "Стадіон Електро металургів",
        workSchedule: "п'ятниця - середа 9:00 - 18:00",
        extraWorkSchedule: "четверг 9:00 - 14:00",
        shopGallery: ["./img/17-richkaStadion.jpg", "./img/14-richkaStadion.jpg", "./img/15-richkaStadion.jpg", "./img/16-richkaStadion.jpg", "./img/18-richkaStadion.jpg"],
        prices: ["244", "213", "191", "165", "134", "102", "88", "65", "38", "396", "312", "292", "265"],
        googleMaps: "https://goo.gl/maps/gfniXtCqMRQTsDM48",
        id: "005"
    },
    {
        title: "Big Shop",
        description: "Стадіон Електро металургів",
        workSchedule: "вівторок - неділя 8:00 - 19:00",
        extraWorkSchedule: "понеділок до 15:00",
        shopGallery: ["./img/20-bigShopStadion.jpg", "./img/21-bigShopStadion.jpg", "./img/22-bigShopStadion.jpg"],
        prices: ["103", "43", "360", "339", "305", "238", "164"],
        googleMaps: "https://goo.gl/maps/kYAMaa1g77kvkhCr9",
        id: "006"
    }
];

const ulShopList = document.querySelector('.shop-list');

function gallery(array) {
    let imgElement = '';

    for (const img of array) {
        imgElement += `<img
        class="gallery__smallImg"
        src=${img}
        alt=""
        >`
    }

    return imgElement;
}

for (const shop of shopList) {
    const li = document.createElement('li');
    li.className = 'shop-list__shop';
    li.innerHTML += `
        <div class="shop__gallery>
            <div id="gallery__bigImg">
                <img class="gallery__bigImg" src=${shop.shopGallery[0]} alt="${shop.title}">
            </div>
        </div>
        <div class="shop__description">
            <h3>${shop.title}</h3>
            <p>${shop.description}</p>
            <p>
                ${shop.workSchedule} <br>
                ${shop.extraWorkSchedule}
            </p>
            <div class="price-wrapper">
                <p id="price" class="price">"Ціна за кг: ???"</p>
                <a
                target="_blank"
                href="${shop.googleMaps}"
                >
                <img 
                class="google-maps-icon"
                src="./img/google-maps.png"
                alt="гугл-мапс"
                >
                </a>
            </div>
        </div>
    `;
    ulShopList.append(li);
}

window.onload = function () {
    window.setInterval(function() {
        const priceArray = document.querySelectorAll('#price');

        const date = new Date(); 

        const day = date.getDay() // Sunday - Saturday : 0 - 6
        const hours = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        for (let i = 0; i < shopList.length; i++) {
            
            priceArray[i].textContent = `Сьогодні за кг: ${shopList[i].prices[day]} грн`;
            if (shopList[i].id === '001') {
                const img = document.createElement('img');
                priceArray[i].textContent = `Ціна за кг: на фото`;

                priceArray[i].innerHTML += `<img 
                src="./img/3-richka8kv.jpg"
                style="width: 200px"
            >`;
            }
            
            if (shopList[i].id === '002') {
                const img = document.createElement('img');
                priceArray[i].textContent = `Не має графіку змін цін`;
            }

            if (shopList[i].id === '005') {
                const img = document.createElement('img');
                priceArray[i].textContent = `Ціна за кг: на фото`;

                priceArray[i].innerHTML += `<img 
                src="./img/14-richkaStadion.jpg"
                style="width: 300px"
            >`;
            }
        }
    }, 100)
}