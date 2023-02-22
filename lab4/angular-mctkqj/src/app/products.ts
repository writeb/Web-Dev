export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone 14 Pro 128Gb purple',
    price: 1305.23,
    description: `Apple iPhone 14 Pro 128Gb Purple Smartphone`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/hf7/62948389748766/apple-iphone-14-pro-128gb-fioletovyj-106363283-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h50/63074367635486/apple-iphone-14-pro-128gb-fioletovyj-106363283-4.jpg',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/0f/0f7611c0-3b12-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-fioletovyi-106363283/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Airpods Pro 2',
    price: 267.33,
    description: `Apple Airpods Pro 2nd generation headphones white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e093-3a26-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e095-3a26-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Apple Watch Series 8 45mm',
    price: 503.13,
    description: `Smart Watch Apple Watch Series 8 45mm Aluminum Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fa7c0fd-3b26-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fa7c0ff-3b26-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'MacBook Pro 16',
    price: 5478.56,
    description: `Apple MacBook Pro 16 MVVM2 Laptop Silver`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h2d/46665337995294/apple-macbook-pro-16-mvvm2-serebristyj-100397588-1-Container.jpg',
    image2: 'https://www.mechta.kz/images/product/69725/17100000154_2-480.webp',
    image3: 'https://www.mechta.kz/images/product/69725/17100000154_5-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Apple iPad Pro 2022',
    price: 3099.73,
    description: `Apple iPad Pro 2022 12.9 2Tb Wi-Fi Tablet Grey`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h82/64905252929566/apple-ipad-pro-2022-12-9-2tb-wi-fi-seryi-107279814-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/5c/5cfd71f6-bc65-11eb-a23e-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/5c/5cfd71f7-bc65-11eb-a23e-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-12-9-2tb-wi-fi-seryi-107279814/?c=750000000#!/item',
    rating: 0,
  },
  {
    id: 6,
    name: 'Yandex Station Mini 2',
    price: 99.51,
    description: `Smart Speaker Yandex Station Mini 2 with Clock Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hb7/46546983649310/yandeks-novaya-stantsiya-mini-s-chasami-chernyi-102580021-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/dd/ddd3a0a8-2b30-11ec-a23f-005056b6dbd7-480.webp',
    image3:
      'https://static.beeline.ru/shop/media/goods/334x434/5bac702a-ff82-4b2f-8a16-810f4f2fc3ae.png',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 7,
    name: 'Microphone',
    price: 63.39,
    description: `Fifine T669 Microphone`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hc8/44993597571102/fifine-t669-cernyj-102158689-1-Container.jpg',
    image2:
      'https://static.shop.kz/upload/resize_cache/iblock/e46/rj3yir4wfg924u30zygmiqjwha0kjcy8/450_450_1/167890o4.jpg',
    image3:
      'https://static.shop.kz/upload/resize_cache/iblock/55b/pwcllg4xz3jwypy45vv4t39d9digsydn/450_450_1/167890o5.jpg',
    link: 'https://kaspi.kz/shop/p/fifine-t669-102158689/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 8,
    name: 'iMac 24',
    price: 1855.77,
    description: `Apple iMac 24 2021 24M182SUX MGTF3 Monoblock silver`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hb7/34185499017246/apple-imac-24-2021-24m182sux-mgtf3-serebristyj-101530799-1-Container.jpg',
    image2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowLj-ir9JThZOGk5kL75nv2OVVKon82hlmu23xPjAf9sqvjLvtW-eEu0JXvYOhHLgXN4&usqp=CAU',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/61/6161917d-bdd8-11eb-a23e-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 9,
    name: 'Samsung Odyssey G5',
    price: 413.66,
    description: `Samsung Odyssey G5 LS32AG550EIXCI Monitor Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h94/51312038641694/samsung-odyssey-g5-ls32ag550eixci-cernyj-105171528-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/4f/4f47a8bc-3f03-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/4f/4f47a8bf-3f03-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/samsung-odyssey-g5-ls32ag550eixci-chernyi-105171528/?c=750000000#!/item',
    rating: 5.0,
  },
  {
    id: 10,
    name: 'HP printer',
    price: 205.32,
    description: `HP LaserJet M141w 7MD74A`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h01/49526189457438/hp-laserjet-m141w-7md74a-104207206-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fff5212-1796-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3f/3fff5213-1796-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/hp-laserjet-m141w-7md74a-104207206/?c=750000000#!/item',
    rating: 5.0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
