var Cake_List = [
"Chocalate pastry",
" Vanilla pastry",
"Chocalate cake",
"Vanilla Cake",
"Yellow Butter Cake",
"Rasmalai Cake",
"Rasmalai pastry",
"Yellow Butter pastry ",
];
function getmenu() {
var htmldata = "";
Cake_List.sort();
for (var i = 0; i < Cake_List.length; i++) {
htmldata = htmldata + Cake_List[i] + "<br>";
}
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item() {
var htmldata;
var imgtags = '<img id="im1" src="Cake.PNG"/>';
var item = document.getElementById("add_item").value;
Cake_List.sort();
htmldata = "";
for (var i = 0; i < Cake_List.length; i++) {
htmldata = htmldata + imgtags + Cake_List[i] + "<br>";
}
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_top() {
var item = document.getElementById("add_item").value;
Cake_List.push(item);
add_item();
}
function Play_Song() {
var Swara = document.getElementById("My_Audio");
Swara.play();
}
function Pause_Song() {
My_Audio.pause();
}
