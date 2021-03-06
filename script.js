let userId = [];  
let userName = [];
let userCountry = [];
let userSlogan = [];
let page = 0;
let dataNo = 20;
let dataId = 1;
let url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';


function fetchData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data));
}

function getData(data) {
    table = '';
    button = '';
    userId = [];
    userName = [];
    userCountry = [];
    userTrips = [];
    userAirlines = [];
    

    data['data'].forEach((user) => {
        userId.push(user._id);
        userName.push(user.name);
        userCountry.push(user.airline[0].country);
        userTrips.push(user.trips);
        userAirlines.push(user.airline[0].name);
        totalPages = console.log(data.totalPages);
    })
    for (let i = 0; i < userId.length; i++) {
        table += `<tr>
            <td>${dataId}</td>
            <td>${userName[i]}</td>
            <td>${userId[i]}</td>
            <td>${userCountry[i]}</td>
            <td>${userTrips[i]}</td>
            <td>${userAirlines[i]}</td>
        </tr>`
        dataId += 1;
    }
    document.getElementById('table').innerHTML = table;
    if (page == 631) {
        button += `<button class="btn btn-primary btn-sm bg-danger p-1 m-1" id="${631}" onclick="pageNo(id)">${632}</button>`

    }
    else if(page==630) {
        for (i = page + 1; i <= page + 2; i++) {
            if (i == page + 1) {
                button += `<button class="btn btn-primary btn-sm bg-danger p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
            else {
                button += `<button class="btn btn-primary btn-sm p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
        }
    }
    else if(page==629) {
        for (i = page + 1; i <= page + 3; i++) {
            if (i == page + 1) {
                button += `<button class="btn btn-primary btn-sm bg-danger p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
            else {
                button += `<button class="btn btn-primary btn-sm p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
        }
    }
    else if(page<=628) {
        for (i = page + 1; i <= page + 4; i++) {
            if (i == page + 1) {
                button += `<button class="btn btn-primary btn-sm bg-danger p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
            else {
                button += `<button class="btn btn-primary btn-sm p-1 m-1" id="${i - 1}" onclick="pageNo(id)">${i}</button>`
            }
        }
    }
    document.getElementById('button').innerHTML = button;
    document.getElementById('page').innerHTML = `<label>Page ${page + 1}</label>`;

}
function nextClick() {
    if (page < 631) {
        page += 1;
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        fetchData(url);
    }

}
function previousClick() {
   
    if (page>0 && page <= 631) {
        page -= 1;
        dataId -=(userName.length+10);
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        console.log(page + "next");
        fetchData(url);
    }
}
function fisrtClick() {
    if (page > 0) {
        dataNo = 20;
        dataId = 1;
        page = 0;
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        // console.log(url)
        fetchData(url);
    }

}
function lastClick() {
    page = 631;
    dataId = (630 * 10) + userName.length + 1;
    url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
     console.log(url)
    fetchData(url);
}
function pageNo(id) {
    if (Number(id) == page) {
        page = Number(id);
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        
    }
    else if (Number(id) - page == 1) {
        page = Number(id);
        dataNo += 10;
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        fetchData(url);
    }
    else if (Number(id) - page == 2) {
        console.log('2' + Number(id) - page)
        page = Number(id);
        dataNo += 20;
        dataId += 10;
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        fetchData(url);
    }
    else if (Number(id) - page == 3) {
        console.log('3' + Number(id) - page)
        page = Number(id);
        dataNo += 40;
        dataId += 20;
        url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
        fetchData(url);
    }
}

fetchData(url);
