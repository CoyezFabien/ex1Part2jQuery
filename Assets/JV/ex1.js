
/*mouseover: L'évènement mouseover est déclenché à partir d'un Element lorsqu'un dispositif de pointage (une souris par exemple) déplace le curseur sur l'élément ou sur l'un de ses éléments fils.
mouseleave: L'évènement mouseleave est déclenché à partir d'un Element lorsque le curseur d'un dispositif de pointage (ex. une souris) se déplace en dehors de cet élément.*/
$(function(){ 
    $('#zoom').mouseover(function () { 
        $('#zoom').css('width' , '+= 50px');/*+= correspond à une incrémentation de la taille de l'image sans qu'on l'ai récupérée */
})

    $('#zoom').mouseover(function () { 
        $('#zoom').css('width' , '-= 50px');
    });
});
// incrémentation En informatique, augmentation de la valeur d'une variable, du contenu d'un registre ou d'une mémoire, d'une quantité constante à chaque exécution d'une instruction, généralement répétitive, d'un programme.