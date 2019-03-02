var express = require('express');
var axios = require('axios');
var app = express();
app.get('/people', (req, res, next) => {
    res.json(['Tony','Lisa','Michael','Ginger','Food']);
});
app.get('/sheet', (req, res, next) => {
    getSheet().then(data => res.json(data), err => res.send(err));
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


function getSheet() {
    let url = 'https://sheets.googleapis.com/v4/spreadsheets/1_owEhU0Ewa6Lc20jhhb5uB4uG1CW9ZEkId5nYOzxdts/values/Sheet1!A1:D5';
    let config = {
        timeout: 600000,
        responseType: 'json',
        params: { key: 'AIzaSyDUlgg4ejZjOnSRjjA5QDCqU8YrL7QQU3E' }
    }
    return axios.get(url, config).then(response => response.data);
}
