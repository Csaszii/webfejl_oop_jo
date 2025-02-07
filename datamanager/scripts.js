/**
 * @typedef {{nev: string , eletkor : Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} person
 * @returns {void}
 */

class DataManager{
    /**
     * @type {Person[]}
     */
    #array

    /**
     * @type {UpdateCallback}
     */
    #updatecallback

    /**
     * @param {Person} array
     */

    constructor (array = []){
        this.#array = array;

        this.#updatecallback = () => {}
    }

    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback) {
        this.#updatecallback = callback;
        this.#updatecallback = this.#array;
    }

    /**
     * 
     * @param {Person} Item 
     */
    add(Item){
        this.#array.push(Item);
        this.#updatecallback(this.#array);
    }

    /**
     * 
     * @param {String} Name 
     */
    filterName(Name){
        const result = []
        for(const elem of this.#array){
            if(elem.nev.includes(Name)){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }

    /**
     * 
     * @param {Number} Age 
     */
    filterAge(Age){
        const result = [];
        for (const elem of this.#array){
            if (elem.eletkor === Age){
                result.push(elem)
            }
        }
        this.#updatecallback(result);
    }

    filter(filterCallback) {
        const result = [];
        for(const elem of this.#array){
            if(filterCallback(elem)){
                result.push(elem);
            }
        }
        this.#updatecallback(result);
    }

} 

class Datatable{
    /**
     * 
     * @param {Datamanager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement("table");
        document.body.appendChild(table);

        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        datamanager.setUpdateCallback(
            (persons) => {
                tbody.innerHTML = "";
                for(const pers of persons){
                    const tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    const td1 = document.createElement("td");
                    td1.innerHTML = pers.nev;
                    tr.appendChild(td1);
                    const td2 = document.createElement("td");
                    td2.innerHTML = pers.eletkor;
                    tr.appendChild(td2);
                }
            }
        )
        }
}

const datamanager = new DataManager([{nev: "Fity Matyi", eletkor: 69}]);
const table = new Datatable(datamanager);

const inputfield = document.createElement("input");
document.body.appendChild(inputfield);
inputfield.addEventListener('change', (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
        const fileContent = reader.result;
        console.log(fileContent);

        const split = fileContent.split('\n');

        for (const line of split){
            const data = line.split(";");

            const person = {
                nev: data[0],
                eletkor: Number(data[1])
            };
            datamanager.add(person);
        }
    }
});