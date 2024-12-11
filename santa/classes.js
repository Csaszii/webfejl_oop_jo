class Factory{ // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manok = new Array(); // egyenlő []
        this.arreas = new Array();

    }
    addMano(egymano) {
        this.manok.push(egymano);
        createRow(egymano);
        appendToSelector(egymano);
        appendToAreaSelector(egymano.area)
    }
    createId(){
        return this.manok.length;
    }
    showProductList(ID){
        for(let i = 0; i < this.manok.length; i++){
                if(this.manok[i].id == ID){
                    refreshProductList(this.manok[i]);
                }
        }
    }
    addmanoproduct(product, id){
        for(let i = 0; i < this.manok.length; i++){
            if (this.manok[i].getName() == id){
                this.manok[i].addproduct(product);
                this.showProductList(this.manok[i].id);
                console.log(this.manok[i].products)
            }
        }
    }
    addnewarea(area){
        this.arreas.push(area);
        appendToAreaSelector(area);
    }
 
}

class Companion{// TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg){
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.products = new Array();
    }
    addproduct(product){
        this.products.push(product);
    }

    getName(){
        return this.vezeteknev + " " + this.keresztnev
    }
    
 
}
let mano = new Companion(1, "Kristály", "Szép", "Sátor");
console.log(mano.getName())