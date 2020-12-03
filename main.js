var menu_list_array = ["Panner Tikka Pizza",
    "Mozzarella Pizza",
    "Corn & Cheese pizza",
    "Veggie Delight Pizza",
    "Chicken Pizza"
];

function getmenu() {
    var html;
    html = "<ol class='menulist'>";
    menu_list_array.sort();
    for (var k = 0; k < menu_list_array.length; k++) {
        html = html + '<li>' + menu_list_array[k] + '</li>';
    }
    html = html + "</ol>";
    document.getElementById("display_menu").innerHTML = html;
}

function add_item() {
    var htmltext;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmltext = "<section class='cards'>"
    for (var k = 0; k < menu_list_array.length; k++) {
        htmltext = htmltext + "<div class='card'>" + "<img src='images/pizzaImg.png'/>" + menu_list_array[k] + "</div>"
    }
    htmltext = htmltext + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmltext;
}