const beers = []

const addBeer  = function (name , category, rate) {
const beernew = {name:name , category:category, rate:rate}
beers.push(beernew)
}

const renderBeers = function (){
    $('.beers-list').empty();
    for( let i=0 ; i < beers.length ; i++){
        $('.beers-list').append ("<li>" + (beers[i].name + "  " +  beers[i].category 
     + "<br>"  +beers[i].rate) + "</li>"
        )}
}


$('.post-beer').on("click", function(){
const name =$('.beer-input').val()
const category = $('.category-input').val()
const rate = $('select').val()
addBeer(name , category, rate)
renderBeers();
})






