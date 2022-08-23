/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'planned-parenthood': "url('https://www.aljazeera.com/mritems/Images/2017/1/27/9d2935ba102746f9b83ecbf36b98a945_8.jpg')",
        'dress-for-success': "url('https://cdn.vox-cdn.com/thumbor/0gl2OiRp3hR6pjMK5d26ICddPRM=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333)/cdn.vox-cdn.com/uploads/chorus_asset/file/7554677/shop_narro_vintage_clothing.jpg')",
        'local-shelters': "url('https://static01.nyt.com/images/2011/02/16/world/16afghanistan_337-span/AFGHANISTAN-jumbo.jpg')",
        'red-cross': "url('https://www.redcross.org/content/dam/redcross/about-us/news/2020/disaster-response-12799-218.jpg')",
        'planet-aid': "url('https://www.brandworkz.com/wp-content/uploads/2013/04/Clothes.jpg')",
        'local-schools': "url('https://s-i.huffpost.com/gen/4173630/images/o-KINDERGARTEN-JAPAN-facebook.jpg')",
      }

    },
  },
  plugins: [],
}
