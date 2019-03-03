let animals = [];

function displayAniamlGif(animal){
// let animal = $(this).attr('data-animal');
console.log($('.animal'));
let queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ animal + '&api_key=FSNC6NbUkNUCdOs3dM55vf7lCt1MBbDa&limit=10&rating=pg-13';

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
    var results = response.data;
    $('#animalgif').empty();
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
        a.attr('data-animal',animals[i]);
        a.text(animals[i]);
        $('#buttons_view').append(a);
        a.click(function(){
            console.log(this);
            var animal = this.dataset.animal;
            console.log(animal);
            displayAniamlGif(animal);
        });
    }
}

$('#add_animal').on('click', function(event){
    event.preventDefault();
    let animal = $('#animal_input').val().trim();

    animals.push(animal);
    creatButtons();
});


console.log(displayAniamlGif)
creatButtons();
// $("#buttons_view").click('.animal',function(){
//     console.log(this)
//     displayAniamlGif();
// });