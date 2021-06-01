'use strict'

let cxList =[];


function Customer ( cxName , foodType )
{
    this.cxName = cxName;
    this.foodType = foodType;
    this.path = `img/${foodType}.jpg`;
    // this.prise = prise;
    cxList.push(this);

}


let formEl = document.getElementById('form');
formEl.addEventListener('submit' , addOrder);

function addOrder(event)
{
    event.preventDefault();

    let newCxName = event.target.name.value;
    let newFoodType = event.target.type.value;

    new Customer ( newCxName , newFoodType);
tableRender();
addToLocalStorage();

}
let tableEl = document.getElementById('table');
let bodyEl = document.getElementById('tbody');
function tableRender()
{
    bodyEl.textContent = "";

    for (let index = 0; index < cxList.length ; index++) 
    {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl_1 =  document.createElement('td');
        trEl.appendChild(tdEl_1);

        let imgEl =  document.createElement('img');
        tdEl_1.appendChild(imgEl);
        imgEl.setAttribute('src',cxList[index].path);

        let tdEl_2 =  document.createElement('td');
        trEl.appendChild(tdEl_2);
        tdEl_2.textContent = `Customer Name : ${cxList[index].cxName} \nFood Type : ${cxList[index].foodType} \n
         Food Prise : ${random()}`;



        
    }

}


function random()
{
    return Math.floor((Math.random() * (20 - 4) + 4));
}


function addToLocalStorage()
{
    let data = JSON.stringify(cxList);
    localStorage.setItem('Orders', data);

    window.location.reload();

}

function gettingFromLocalStorage()
{
    let gettingData = localStorage.getItem('Orders');
    let convertedData = JSON.parse(gettingData);

    if ( convertedData !== null)
    {
        cxList = convertedData;
    }
    tableRender();


}

gettingFromLocalStorage();

let removeEl = document.getElementById('clear');
removeEl.addEventListener('click' , removeOrders);

function removeOrders()
{
    localStorage.clear();
    window.location.reload();

}