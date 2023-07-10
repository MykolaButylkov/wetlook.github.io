import React, { useEffect, useState } from 'react';

import './App.css';
import './style.css'

export const shopList = [
  {
      title: "Richka",
      description: "Біля 8-го кварталу і магазину Velox",
      workSchedule: "четверг - понеділок 9:00 - 18:00",
      extraWorkSchedule: "вівторок 9:00 - 15:00",
      shopGallery: [`./img/1-richka8kv.jpg`, "./img/2-richka8kv.jpg", "./img/3-richka8kv.jpg"],
      prices: ["268", "249", "222", "199", "167", "138", "112", "95", "76", "42", "399", "362", "328", "296"],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2691.727851408161!2d34.388972200000005!3d47.57308330000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDM0JzIzLjEiTiAzNMKwMjMnMjAuMyJF!5e0!3m2!1suk!2sua!4v1687378694643!5m2!1suk!2sua",
      id: "001"
  },
  {
      title: "Nekrasova",
      description: "Прехрестя Некрасова и Электрометалургов",
      workSchedule: "понеділок - неділя 9:00 - 18:00",
      extraWorkSchedule: "у день перед оновленням товару працює до 11:00",
      shopGallery: ["./img/5-nekrasova.jpg", "./img/6-nekrasova.jpg"],
      prices: [''],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2691.581063321923!2d34.3876789!3d47.575939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dca3971ad21005%3A0x1634d2b4ade34f78!2z0LLRg9C70LjRhtGPINCV0LvQtdC60YLRgNC-0LzQtdGC0LDQu9GD0YDQs9GW0LIsIDk2LCDQndGW0LrQvtC_0L7Qu9GMLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTMyMDA!5e0!3m2!1suk!2sua!4v1687392930503!5m2!1suk!2sua",
      id: "002"
  },
  {
      title: "Big Shop",
      description: "Кристал",
      workSchedule: "вівторок - неділя 8:00 - 19:00",
      extraWorkSchedule: "понеділок до 14:00",
      shopGallery: ["./img/7-bigShopKristal.jpg", "./img/8-bigShopKristal.jpg", "./img/9-bigShopKristal.jpg"],
      prices: ["103", "43", "360", "339", "305", "238", "164"],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d672.920876947614!2d34.3947084!3d47.573946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dca399158954bb%3A0x128624889b32fb94!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsIDE4OCwg0J3RltC60L7Qv9C-0LvRjCwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDUzMjAw!5e0!3m2!1suk!2sua!4v1687392866672!5m2!1suk!2sua",
      id: "003"
  },
  {
      title: "Big Shop",
      description: "Центральний ринок",
      workSchedule: "п'ятниця - середа 8:00 - 19:00",
      extraWorkSchedule: "четверг 8:00 - 15:00",
      shopGallery: ["./img/10-bigShopRunok.jpg", "./img/12-bigShopRunok.jpg", "./img/13-bigShopRunok.jpg"],
      prices: ["305", "238", "164", "103", "43", "360", "339"],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1346.1884108157471!2d34.3963826!3d47.5604563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dca37ead7c2149%3A0x1e957069be2c7f7e!2z0LLRg9C70LjRhtGPINCS0ZbQutGC0L7RgNCwINCj0YHQvtCy0LAsIDMyLCDQndGW0LrQvtC_0L7Qu9GMLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTMyMDA!5e0!3m2!1suk!2sua!4v1687393006580!5m2!1suk!2sua",
      id: "004"
  },
  {
      title: "Richka",
      description: "Стадіон Електро металургів",
      workSchedule: "п'ятниця - середа 9:00 - 18:00",
      extraWorkSchedule: "четверг 9:00 - 14:00",
      shopGallery: ["./img/17-richkaStadion.jpg", "./img/15-richkaStadion.jpg", "./img/16-richkaStadion.jpg"],
      prices: ["328", "296", "268", "249", "222", "199", "167", "138", "112", "95", "76", "42", "399", "362"],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1346.1435079476548!2d34.3939711!3d47.5622038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dca3be691a8a37%3A0xb52ba7c1ba7b3ba!2z0KHQsNC70L7QvSDQvNC10LHQtdC70LggRG9tbWlubw!5e0!3m2!1suk!2sua!4v1687393070492!5m2!1suk!2sua",
      id: "005"
  },
  {
      title: "Big Shop",
      description: "Стадіон Електро металургів",
      workSchedule: "вівторок - неділя 8:00 - 19:00",
      extraWorkSchedule: "понеділок до 15:00",
      shopGallery: ["./img/20-bigShopStadion.jpg", "./img/22-bigShopStadion.jpg", "./img/21-bigShopStadion.jpg"],
      prices: ["103", "43", "360", "339", "305", "238", "164"],
      googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1346.1216766072832!2d34.3935645!3d47.5630534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dca37898540499%3A0xf54425105cd4451c!2z0JHQsNC90LrQvtC80LDRgiDQn9GA0LjQstCw0YLQkdCw0L3QutGD!5e0!3m2!1suk!2sua!4v1687393112980!5m2!1suk!2sua",
      id: "006"
  }
];


const App = () => {
    const [indexMainFoto, setIndexMainFoto] = useState(0);

    const date = new Date(); 
    const day = date.getDay() // Sunday - Saturday : 0 - 6
    
    function handlePrice(shop) {
        if (shop.title === 'Nekrasova') {
            return 'Цін ще не бачив, і не факт, що колись побачу'
        }

        if (shop.prices[day] === '43') {
            return `Сьогодні тут краща ціна: ${shop.prices[day]}грн/кг`
        }

        if (shop.id === '005' || shop.id === '001') {
            let i = day + 7;

            return shop.prices[i] === '42' ? `Сьогодні тут краща ціна: ${shop.prices[i]}грн/кг`: `Сьогодні за кг: ${shop.prices[i]}грн або ${shop.prices[day]}грн`
        }

        return shop.prices[day] ? `Сьогодні за кг: ${shop.prices[day]}грн` :  'можна побачити на фото'
    }

    function sortedShops(shop) {
        if (shop.id === '005' || shop.id === '001') {
            let i = day + 7;

            return +shop.prices[i];
        }

        if (+shop.prices[day] > 0) {
            return +shop.prices[day];
        }

        return Infinity ;
    }

    const visibleShops = shopList.sort((a, b) => (sortedShops(a) - sortedShops(b)));

  return (
    <>
        <header className="header">
            <img 
              src={require('./img/logo-2.jpg')}
              alt="wetlook"
              className="header__logo"
            />
        </header>
        <main className="main">
            <h2 className="main__title">Секонд-Хенди Нікополя з цінами та графіком роботи</h2>
            <ul className="shop-list" >
                {visibleShops.map(shop => {
                    return (
                        <li className="shop-list__shop" key={shop.id}>
                            <div className="shop__gallery">
                                <div id="gallery__container-bigImg">
                                    {shop.shopGallery[indexMainFoto]
                                        ? (<img className="gallery__bigImg" src={require(`${shop.shopGallery[indexMainFoto]}`)} alt={`${shop.title}`} />)
                                        : (<img className="gallery__bigImg" src={require(`${shop.shopGallery[0]}`)} alt={`${shop.title}`} />)}
                                    <div className="gallery__container">
                                        {shop.shopGallery.map((foto, index) => (
                                            <img
                                                className="gallery__smallImg"
                                                src={require(`${foto}`)}
                                                alt={`${shop.title}`}
                                                onClick={() => (setIndexMainFoto(index))} 
                                            />
                                        )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="container-shop-description">
                                <div className="shop__description">
                                    <h3>{shop.title}</h3>
                                    <p>{shop.description}</p>
                                    <p>{shop.workSchedule}<br />{shop.extraWorkSchedule}</p>

                                    <div className="price-wrapper">
                                        <p id="price" className="price">{handlePrice(shop)}</p>
                                    </div>
                                </div>

                                <div className="conteiner-inframe">
                                    <iframe
                                        className='inframe'
                                        title={shop.title}
                                        src={shop.googleMaps}
                                        allowfullscreen=''
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
        <footer>© Copyright 2023 By Mykola Butylkov</footer>
    </>
  );
}

export default App;
