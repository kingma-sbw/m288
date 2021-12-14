let product = undefined;

function showUI()
{
    let htmlObj = document.getElementById(`produktbeschreibung`)
    htmlObj.innerHTML=
        '${data.produktName<br>'+
        '${data.produktPreis<br>'+
        '${data.produktText<br>';
}