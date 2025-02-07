class ArrayList {
    /**
     * @type {Number}
    */
    #currentLenght
    #currentState

    get Count(){
        return this.#currentLenght
    }

    constructor() {
        this.#currentLenght = 0;
        this.#currentState = {};
    }

    Add(item) {
        const index = this.#currentLenght;
        this.#currentState[index] = item;
        Object.defineProperty(this, index, { 
            get: function () {
                return this.#currentState;
            },
            set: function(value) {
                this.#currentState[index] = value;
            }
        })
        this.#currentLenght++
    }

    Clear() {
        this.#currentLenght = 0;
        this.#currentState = {};
    }
}

const alma = [];

Object.defineProperty(alma, "nev", { value: "Ferenc"})
alma.nev = 'asd';
console.log(alma);

const a = new ArrayList();

a.Add(5);
console.log(igen[0]);

a.Add("wdqjöqwdiöwdqjiö");
a.Add({new: "odwdqwddqw"})

console.log(a);