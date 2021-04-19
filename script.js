//adds an event listener to the fetch data button
document.getElementById('fetchData').addEventListener('click', fetchPostData);

let fs = require('fs');
const http = require('http');
const fetch = require('node-fetch');

 //fetching data from the API
const fetchPostData = 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        let data = '';
      return response.json();
    })
    .then(function(json)  {
        console.log(json);
        data += json;
//making the fetched data a string
        const fetchedData = JSON.stringify(data);
        //writing to a file(posts.txt)
    fs.writeFile('./Result/posts.txt', fetchedData, (err) => {
        if (err) throw err;
           console.log('success');
    });
});
