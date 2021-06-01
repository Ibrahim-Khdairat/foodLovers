'use strict'
let formEl = document.getElementById('form');
formEl.addEventListener('submit' , addOrder);


let tableEl = document.getElementById('table');
let bodyEl = document.getElementById('tbody');


let removeEl = document.getElementById('clear');
removeEl.addEventListener('click' , removeOrders);



let cxList =[];


function Customer ( cxName , foodType )
{
    this.cxName = cxName;
    this.foodType = foodType;
    this.path = `img/${foodType}.jpg`;
    cxList.push(this);

}



function addOrder(event)
{
    event.preventDefault();

    let newCxName = event.target.name.value;
    let newFoodType = event.target.type.value;

    new Customer ( newCxName , newFoodType);

    tableRender();
    addToLocalStorage();


}
function tableRender()
{
    bodyEl.textContent = "";

    for (let index = 0; index < cxList.length ; index++) 
    {
        let trEl = document.createElement('tr');
        bodyEl.appendChild(trEl);

        let tdEl_1 =  document.createElement('td');
        trEl.appendChild(tdEl_1);

        let imgEl =  document.createElement('img');
        tdEl_1.appendChild(imgEl);
        imgEl.setAttribute('src',cxList[index].path);

        let tdEl_2 =  document.createElement('td');
        trEl.appendChild(tdEl_2);
        tdEl_2.textContent = `Customer Name : ${cxList[index].cxName} /`+'\n'+` Food Type : ${cxList[index].foodType}  /`+`\n`+` Food Prise : ${random()} JOD `;



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



function removeOrders()
{
    localStorage.clear();
    window.location.reload();

}