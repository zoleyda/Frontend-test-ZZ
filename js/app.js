/*Variable aplicación*/
var App = {};

/*Metodo para renderizar un acción*/
App.render = function(id, data){
var rendered = Handlebars.compile($(id).html()), 
anima = ['bounceInLeft', 'fadeInDownBig', 'slideInDown',
'lightSpeedIn', 'slideInUp'],
item = anima[Math.floor(Math.random()*anima.length)];; 
$('#output').html(rendered(data));
$('#output').addClass('animated '+item)
.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
$(this).removeClass();
});
}

/*Busca en la lista por id*/
App.getById = function(id){
   return _.findWhere(App.data, {id: parseInt(id)});
}

/*Al terminar de cargar el DOM, se carga la data del JSON*/
$(function(){
    var a = function(e){e.preventDefault();history.back();}
    $('body').on('click', 'a.back', a);
    $.getJSON('data.json', function(data){
        App.data = data;
        routie('todos');
    });
});

/*Muestra todos los usuarios*/
routie('todos', function() {
    App.render('#default', {user: App.data, todos: true}); 
});

/*Muestra todos los usuarios activos*/
routie('activos', function(e) {
    var list = _.filter(App.data, function(el){ return el.isActive; });
    App.render('#default', {user: list, act: true });
});

/*Muestra todos los usuarios inactivos*/
routie('inactivos', function(e) {
    var list = _.filter(App.data, function(el){ return !el.isActive; });
    App.render('#default', {user: list,  ina: true  });
});

/*Muestra la localización de un usuarios en el mapa*/
routie('mapa/:id', function(e) {
    var row = App.getById(e);
    if(!row)return;
    App.render('#location', row);
    map = new GMaps({
        div: '#maps',
        lat: row.latitude,
        lng: row.longitude,
        width: "100%",
        height: "30em",
        zoom : 5
    });
});

/*Muestra la información del usuario*/
routie('info/:id', function(e) {
    var row = App.getById(e);
    App.render('#info', row);
});

/*Muestra la lista de amigos del usuario*/
routie('amigos/:id', function(e) {
    var row = App.getById(e);
    App.render('#friend', row);
});

