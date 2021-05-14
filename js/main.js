const test = () => {
   const ingridients = [{
         id: 'e88',
         name: 'картошка',
         alergen: false,
         kkal: 100
      },
      {
         id: '08a',
         name: 'лук',
         alergen: true,
         kkal: 200
      },
      {
         id: 'a0b',
         name: 'шкварки',
         alergen: false,
         kkal: 300
      },
      {
         id: '0dd',
         name: 'бульйон',
         alergen: false,
         kkal: 400
      },
      {
         id: 'd12',
         name: 'морковка',
         alergen: false,
         kkal: 500
      },
      {
         id: '8a1',
         name: 'оливковая олия',
         alergen: false,
         kkal: 600
      }
   ];

   const result = {
      status: 'ok',
      ingridients, // ingridients: ingridients,
      payload: {
         error: 'test_fail',
         message: 'тест не пройден'
      }
   }

   return result;
}

if ( test().status === 'ok') {
   const {ingridients} = test();
   const filterIngr = ingridients.filter( (el) => {
      return el.alergen === false;
   });
   
   const reducer = (accumulator, currentValue) => accumulator + currentValue.kkal;
   const kkal = filterIngr.reduce(reducer, 0);
}