let animals = [];

function displayAniamlGif(){

let animal = $(this).attr('data-animal');
let queryURL = 'http://api.giphy.com/v1/gifs/search?q='+ animal + '&api_key=FSNC6NbUkNUCdOs3dM55vf7lCt1MBbDa&limit=10&rating=pg-13';

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    var results = response.data;
    for(var i = 0; i<results.length;i++){
        var animalDiv = $("<div>");
        var newImg = $('<img>');
        newImg.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(newImg);
        $('#animalgif').prepend(animalDiv);
    }
});
}

function creatButtons(){
    $('#buttons_view').empty();
    for (var i =0; i<animals.length;i++){
        let a = $('<button>');
        a.addClass('animal');
        a.attr('data-name',animals[i]);
        a.text(animals[i]);
        $('#buttons_view').append(a);
    }
}

$('#add_animal').click(function(){
    event.preventDefault();
    let animal = $('#animal_input').val().trim();

    animals.push(animal);
    creatButtons();
});

$("#buttons_view").click('.animal',displayAniamlGif);
creatButtons();