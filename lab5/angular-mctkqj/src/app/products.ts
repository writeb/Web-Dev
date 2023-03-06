export interface Product {
  id: number;
  price: number;
  rating: number;
  name: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  link: string;
  like: number;
  category: number;
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
    category: 4,
    like: 0,
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
    category: 2,
    like: 0,
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
    category: 2,
    like: 0,
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
    category: 1,
    like: 0,
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
    category: 4,
    like: 0,
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
    category: 2,
    like: 0,
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
    category: 2,
    like: 0,
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
    category: 1,
    like: 0,
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
    category: 1,
    like: 0,
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
    category: 1,
    like: 0,
  },
  {
    id: 11,
    name: 'Xiaomi Redmi Note 10 Pro 8',
    price: 294.11,
    description: `Xiaomi Red Note 10 Pro Smartphone 8GB/256GB Grey`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/he1/64487159201822/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/h34/64487162282014/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-5.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 5.0,
    category: 4,
    like: 0,
  },
  {
    id: 12,
    name: 'iPhone 11',
    price: 645.61,
    description: `Apple iPhone 11 128Gb Slim Box Smartphone Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/ha1/31489169227806/apple-iphone-11-128gb-slim-box-cernyj-100692388-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/ha6/31489170309150/apple-iphone-11-128gb-slim-box-cernyj-100692388-4-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    rating: 5.0,
    category: 4,
    like: 0,
  },
  {
    id: 13,
    name: 'iPhone 13',
    price: 838.55,
    description: `Apple iPhone 13 128Gb White Smartphone`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h49/46392664621086/apple-iphone-13-128gb-belyj-102298420-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h07/46392664424478/apple-iphone-13-128gb-belyj-102298420-2-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    rating: 5.0,
    category: 4,
    like: 0,
  },
  {
    id: 14,
    name: 'Impacto GLACIER PC',
    price: 859.29,
    description: `Impacto GLACIER PC System unit white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h73/49488952688670/impacto-glacier-pc-belyj-104191528-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/hd4/49488953147422/impacto-glacier-pc-belyj-104191528-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h3e/49488953606174/impacto-glacier-pc-belyj-104191528-3.jpg',
    link: 'https://kaspi.kz/shop/p/impacto-glacier-pc-belyi-104191528/?c=750000000#!/item',
    rating: 5.0,
    category: 1,
    like: 0,
  },
  {
    id: 15,
    name: 'Xiaomi Redmi Power Bank',
    price: 27.31,
    description: `External Battery Xiaomi Redmi Power Bank 20000mAh Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/ha4/32685349371934/xiaomi-redmi-fast-charge-20000-pb200lzm-cernyj-100322086-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/hd1/32685365624862/xiaomi-redmi-fast-charge-20000-pb200lzm-cernyj-100322086-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h9d/32685391904798/xiaomi-redmi-fast-charge-20000-pb200lzm-cernyj-100322086-4-Container.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-power-bank-20000-mach-chernyi-100322086/?c=750000000#!/item',
    rating: 5.0,
    category: 2,
    like: 0,
  },
  {
    id: 16,
    name: 'Smartbuy',
    price: 8.98,
    description: `Smartbuy SBK-333U-W Keyboard white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/hff/62144805371934/smartbuy-one-sbk-333u-w-belyj-100873525-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h1c/62144805601310/smartbuy-one-sbk-333u-w-belyj-100873525-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h46/62144806518814/smartbuy-sbk-333u-w-belyj-100873525-4.jpg',
    link: 'https://kaspi.kz/shop/p/smartbuy-sbk-333u-w-belyi-100873525/?c=750000000#!/item',
    rating: 5.0,
    category: 3,
    like: 0,
  },
  {
    id: 17,
    name: 'NuPhy Air75',
    price: 435.37,
    description: `Nuphyair 75 Keyboard brown`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hf6/68518715031582/nuphy-air75-korichnevyi-108704424-1.jpg',
    image2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCM3kRjv-ttwJsWzKxnXBtgTCh_O94RomJA&usqp=CAU',
    image3:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4L_upo1dBoQl_P93ZrgYx2a21AsaG5U3OA&usqp=CAU',
    link: 'https://kaspi.kz/shop/p/nuphy-air75-korichnevyi-108704424/?c=750000000#!/item',
    rating: 0,
    category: 3,
    like: 0,
  },
  {
    id: 18,
    name: 'Magic Keyboard 2nd generation',
    price: 297.66,
    description: `Apple Magic Keyboard 2nd generation EN white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h72/49870583660574/apple-magic-keyboard-en-belyj-103957650-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb6/49870584578078/apple-magic-keyboard-2nd-generation-en-belyj-103957650-3.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/49870584119326/apple-magic-keyboard-2nd-generation-en-belyj-103957650-2.jpg',
    link: 'https://kaspi.kz/shop/p/apple-magic-keyboard-2nd-generation-en-belyi-103957650/?c=750000000#!/item',
    rating: 5.0,
    category: 3,
    like: 0,
  },
  {
    id: 19,
    name: 'VARMILO MA87M',
    price: 286.59,
    description: `VARMILO MA87M V2 Summit R2 Keyboard Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h44/61945521438750/varmilo-ma87m-v2-summit-r2-cernyj-106171650-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/hf5/61945521668126/varmilo-ma87m-v2-summit-r2-cernyj-106171650-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/hda/61945521897502/varmilo-ma87m-v2-summit-r2-cernyj-106171650-3.jpg',
    link: 'https://kaspi.kz/shop/p/varmilo-ma87m-v2-summit-r2-chernyi-106171650/?c=750000000#!/item',
    rating: 0,
    category: 3,
    like: 0,
  },
  {
    id: 20,
    name: 'SteelSeries Apex 7',
    price: 254.19,
    description: `Keyboard SteelSeries Apex 7 TKL Red Linear Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/ha4/34386133975070/steelseries-apex-7-tkl-red-linear-cernyj-101525744-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h26/34386140200990/steelseries-apex-7-tkl-red-linear-cernyj-101525744-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/ha0/34386147704862/steelseries-apex-7-tkl-red-linear-cernyj-101525744-3.jpg',
    link: 'https://kaspi.kz/shop/p/steelseries-apex-7-tkl-red-linear-chernyi-101525744/?c=750000000#!/item',
    rating: 5.0,
    category: 3,
    like: 0,
  },
];
