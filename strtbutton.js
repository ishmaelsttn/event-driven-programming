function start()
{
    document.getElementById( "start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop()
{
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
function Playsound()
{
    mysound = new sound("Migos-stir-fry-instrumentalfx.mp3");
    mysound.play ("");
}
{
function sound(src)
{
this.sound = document.createElement("audio");
this.sound.src = src;
this.play = function() {
this.sound.play();
    }
}
function Stopsound()
{
window.location.reload();
}