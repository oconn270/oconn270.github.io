var option1 = document.getElementById("box1");
var option1Selected = option1.options[option1.selectedIndex].text

option1.addEventListener("change", function(){
	option1Selected = option1.options[option1.selectedIndex].text;
});

option2.addEventListener("change", function(){
	option2Selected = option2.options[option2.selectedIndex].text;
})

function redirect () {
	if (TandooriChicken){
		location.href="Tandoori.html";
	}

	else if (Chicken){
		location.href="Chicken.html";
	}

	else if (DinnerSpecials){
		location.href="DinnerSpecials.html";
	}

	else if (CurryDishes){
		location.href="CurryDishes.html";
	}

	else if (CombinationDinner){
		location.href="CombinationDinner.html";
	}

	else if (SideOrders){
		location.href="SideOrders.html";
	}

	else if (Beverages){
		location.href="Beverages.html";
	}

	else(Dessert){
		location.href="Dessert.html";
	}
}