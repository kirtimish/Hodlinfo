async function getData(){
    const res = await axios.get('http://localhost:3000/')
    if(res.status == 200){
        for(let i=0;i<res.data.length;i++){
            // console.log(res.data[i].name);
            showDataOnScreen(res.data[i])
        }
    }
}

function showDataOnScreen(arr){
    const parentNode = document.querySelector('.table-content');
    const childhtml = `<div class="table-row">
    <div class="table-data">${arr.id}</div>
    <div class="table-data">${arr.name}</div>
    <div class="table-data">${arr.last}</div>
    <div class="table-data">${arr.buy + '/' + arr.sell}</div>
    <div class="table-data">${arr.volume}</div>
    <div class="table-data">${arr.base_unit}</div> 
    </div>`
    parentNode.innerHTML += childhtml;
}

getData();