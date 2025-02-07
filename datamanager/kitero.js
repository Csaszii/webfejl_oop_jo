const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 3)); // 5

const obj = {}

obj.calculate1 = sum;   // calculate1-hez assignoljuk a sum erteket

console.log(obj.calculate1(2, 3)); // 5

obj.calculate2 =  (calccb) => {
    const a = 3;
    const b = 5;
    return calccb(a, b);
};

const res1 = obj.calculate2((szam1, szam2) => {
    return szam1 + szam2;
});

console.log(res1);

const res2 = obj.calculate2((szam1, szam2) => {
    return szam1 * szam2;
});

console.log(res2);

obj.calculate3 = (szam1, szam2, callback) => {
    const res = callback(szam1, szam2);
    return res;
};

const res3 = obj.calculate3(7, 8, (szam1, szam2) => {
    return szam1 * szam2;
});

const theFunction = () => {    // Ahol megcsinalod a funkciot azon a scopeon mindent elersz, jelen esetben a scope a theFunction
    const szam = 10;    // a scopeon belul megadjuk a szamot
    const res4 = obj.calculate3(2, 7,(szam1, szam2) => {
        return szam1 * szam + szam2; // itt a calculate 3 callbackjeben is elerjuk a szamot
    });
    console.log(res4);
};

theFunction();
