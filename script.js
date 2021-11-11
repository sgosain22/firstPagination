

var api_url1 = `https://api.instantwebtools.net/v1/passenger?page=0&size=10`;


async function getData(api_url) {
  let response = await fetch(api_url?api_url:api_url1);
  let data = await response.json();
  let list = data.data;
  var row = "";
  list.map((data, index) => {
    var name = data.name;
    var index = index;
    var trips = data.trips;
    data.airline.map((innerData, i) => {
      return (row += `<tr>
	<td>${index + 1}</td>
	<td> <img src=${innerData.logo} alt="Airline logo"/></td>
	<td>${innerData.name}</td>
	<td>${name}</td>
	<td>${innerData.country}</td>
	<td>${trips} </td>
</tr>`);
    });
    console.log(data.airline);
  });
   document.getElementById("tbody").innerHTML = row;
}
getData();

let page = 0;
let dataNo = 10;
let dataId = 1;

function nextClick() {
  if (page < 631) {
    page += 1;
    api_url =
      "https://api.instantwebtools.net/v1/passenger?page=" + page + "&size=10";
    getData(api_url);
  }
}

function previousClick() {
  if (page > 0 && page <= 631) {
    page -= 1;
    dataId -= name.length + 10;
    api_url =
      "https://api.instantwebtools.net/v1/passenger?page=" + page + "&size=10";
    console.log(page + "next");
    getData(api_url);
  }
}

function fisrtClick(id) {
  if (page > 0) {
    dataNo = 10;
    dataId = 1;
    page = 0;
    api_url =
      "https://api.instantwebtools.net/v1/passenger?page=" + page + "&size=10";
    // console.log(url)
    getData(api_url);
  }
}

function lastClick(id) {
  page = 631;
  dataId = 630 * 10 + name.length + 1;
  api_url =
    "https://api.instantwebtools.net/v1/passenger?page=" + page + "&size=10";
  // console.log(url)
  getData(api_url);
  
}



function pageNo(id) {
  if (Number(id) == page) {
      page = Number(id);
      api_url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
      console.log(page)
       getData(api_url);
  }
  else if (Number(id) - page == 1) {
      console.log('1' + Number(id) - page)
      page = Number(id);
      dataNo += 20;
      api_url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
      getData(api_url);
  }
  else if (Number(id) - page == 2) {
      console.log('2' + Number(id) - page)
      page = Number(id);
      dataNo += 40;
      dataId += 20;
      api_url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
      getData(api_url);
  }
  else if (Number(id) - page == 3) {
      console.log('3' + Number(id) - page)
      page = Number(id);
      dataNo += 60;
      dataId += 40;
      api_url = 'https://api.instantwebtools.net/v1/passenger?page=' + page + '&size=10';
      getData(api_url);
  }
}