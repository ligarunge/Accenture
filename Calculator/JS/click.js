let totalCoins = 0;
let coinsAvailable = 0;
let onexUpgrade = 0;
let tenxUpgrade = 0;
let priceOnexUpgrade = 10;
let priceTenxUpgrade = 90;


document.getElementById("totalCoins").innerHTML= totalCoins;
document.getElementById("coinsAvailable").innerHTML= coinsAvailable;
document.getElementById("onexUpgrade").innerHTML= onexUpgrade;
document.getElementById("tenxUpgrade").innerHTML= tenxUpgrade;
document.getElementById("priceOnexUpgrade").innerHTML= priceOnexUpgrade;
document.getElementById("priceTenxUpgrade").innerHTML= priceTenxUpgrade;

document.getElementById("upgrade1").disabled = true;
document.getElementById("upgrade10").disabled = true;


function enableButton() {
    if (coinsAvailable >= priceOnexUpgrade){
    document.getElementById("upgrade1").disabled = false;
    }
   
    else {
        document.getElementById("upgrade1").disabled = true;
    }
}
function enableButtonTen() {
    if (coinsAvailable >= priceTenxUpgrade){
    document.getElementById("upgrade10").disabled = false;
    }
   
    else {
        document.getElementById("upgrade10").disabled = true;
    }
}


function increaseBy1() {
    totalCoins += 1;
    document.getElementById("totalCoins").innerHTML = totalCoins;
    coinsAvailable += 1;
    document.getElementById("coinsAvailable").innerHTML = coinsAvailable;
    enableButton();
    enableButtonTen();
}

function upgrade() {
    
    coinsAvailable = coinsAvailable - priceOnexUpgrade;
    document.getElementById("coinsAvailable").innerHTML = coinsAvailable;
    priceOnexUpgrade = priceOnexUpgrade + priceOnexUpgrade/10;
    onexUpgrade = onexUpgrade + 1;
    document.getElementById("onexUpgrade").innerHTML = onexUpgrade;
    document.getElementById("priceOnexUpgrade").innerHTML = priceOnexUpgrade;
  
 
    setInterval(increaseBy1, 1000);
    refresh();

}

function tenUpgrade() {
    
    coinsAvailable = coinsAvailable - priceTenxUpgrade;
    document.getElementById("coinsAvailable").innerHTML = coinsAvailable;
    priceTenxUpgrade = priceTenxUpgrade + priceTenxUpgrade/10;
    tenxUpgrade = tenxUpgrade + 1;
    document.getElementById("tenxUpgrade").innerHTML = tenxUpgrade;
    document.getElementById("priceTenxUpgrade").innerHTML = priceTenxUpgrade;
  
 
    setInterval(increaseBy1, 100);
    refresh();

}
