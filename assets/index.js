let key = '16ad913096msh3132f772dc507f0p1eedddjsn83b05885f4cf';

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://dad-jokes.p.rapidapi.com/random/joke",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        "X-RapidAPI-Key": "16ad913096msh3132f772dc507f0p1eedddjsn83b05885f4cf"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});