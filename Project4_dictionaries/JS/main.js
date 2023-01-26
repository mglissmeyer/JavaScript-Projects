function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"British Shorthair",
        Age:10,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}