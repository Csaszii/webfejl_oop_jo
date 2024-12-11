/**
 * Create a row for the companions table;
 * 
 * @param {Companion} companion 
 */
function createRow(companion){
    const table = document.getElementById('companions');
    const tbody = table.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    tableRow.id = companion.id;
    const nametd= createCell(tableRow);
    nametd.innerHTML = companion.getName();
    
    const reszlegtd = createCell(tableRow);
    reszlegtd.innerHTML = companion.reszleg;

    const action = createCell(tableRow)
    const button = document.createElement('button');
    button.innerHTML = 'Megtekint';
    action.appendChild(button)
    button.addEventListener('click', checkEventListener)
}

/**
 * Create a new td cell
 * 
 * @param {HTMLTableRowElement} parentElement 
 * @returns {HTMLTableCellElement}
 */
function createCell(parentElement){
    const newCell = document.createElement('td');
    parentElement.appendChild(newCell);
    return newCell;
}

/**
 * 
 * Append a new companion to the selector
 * 
 */
function appendToSelector(mano){ // TODO 11.
    const productForm = document.getElementById('product')
    const selector = productForm.querySelector('#companionlist');

    const option = document.createElement('option');
    option.text = mano.getName();

    selector.appendChild(option);
}


/**
 * 
 * Refresh the productlist table
 * 
 * @param {Companion} companion 
 */
function refreshProductList(companion){ //TODO // TODO 10

    const companionName = document.getElementById('companion_name');
    companionName.innerHTML = companion.getName();
    companionName.style.display = 'block';
    const productTable = document.getElementById('products');
    productTable.style.display = 'table';
    const productTableBody = productTable.querySelector('tbody')
    productTableBody.innerHTML = "";
    for(let i = 0; i< companion.products.length; i++){
        
        const product = companion.products[i];
        const row = document.createElement('tr'); 
        const cell = document.createElement('td'); 
        cell.innerHTML = product;
        row.appendChild(cell); 
        productTableBody.appendChild(row);
    }
    // TODO 10
}

/**
 * 
 * Add companion function for the companion formelement
 * 
 * @param {HTMLFormElement} form 
 */
function addCompanion(form, factory){ //TODO // TODO 6
    const firstName =form.querySelector('#cfirstname')
    const lastname =form.querySelector('#clastname')
    const area = form.querySelector('#carea')
    const id = factory.createId(); // dinamikusan adjuk a az id-t a lenght alapján
    const firstNameValue = firstName.value;
    const lastNameValue = lastname.value;
    const areaValue = area.value;
    const mano = new Companion(id, lastNameValue, firstNameValue, areaValue); //letrehozunk egy uj manot
    factory.addMano(mano); // hozzáadjuk a manot a factoyhoz
    
}

/**
 * 
 * Add product function for the productformelement
 * 
 * @param {HTMLFormElement} form 
 */

function addProductForm(form, factory){ // TODO
    const selector =form.querySelector('#companionlist')
    const productName = form.querySelector('#productname')
    const companionId = selector.value;
    const product = productName.value;
    factory.addmanoproduct(product, companionId);
}

function addArea(form, factory){
    const areaname = form.querySelector('#reszlegnema')
    const area = areaname.value;
    factory.addnewarea(area);
}

function appendToAreaSelector(area){ // TODO 11.
    const areaForm = document.getElementById('area')
    const selector = areaForm.querySelector('#reszleglista');

    const option = document.createElement('option');
    option.text = area;
    selector.appendChild(option);
}