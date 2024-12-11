/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});
document.getElementById('area').addEventListener('submit', function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addArea(form, factory);
});

/**
* table render
*/
function initTable(){// TODO 6
   for(let i = 0; i<companionList.length; i++){ // végig iterál az arryan
       const mano = companionList[i]; // a listábol az i edik elemét kiszedjük
       const actualmano = new Companion(i, mano.firstName, mano.lastName, mano.area); // companion objektum létrehozása  és a konstructorra példányositunk
       for(let product of mano.products){ // A mano objektum product tömbjén megy végig
           actualmano.addproduct(product); // hozzáadja az elemet
       }
       factory.addMano(actualmano);
   }
   
   
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   factory.showProductList(companionId);
   // TODO 10
}