let container = document.querySelector(".mobile-table-container");
let table = document.querySelector('.desktop-table');
console.log(table.children[0].children[1].children[5].children[0])
let rowCount = table.children[0].childElementCount;
let columnCount = table.children[0].children[0].childElementCount;
for (var i = 1; i < rowCount; i++) {
	var tableStrc = document.createElement("table");
	tableStrc.setAttribute("class", "mobile-table table mt-5");
	var td, th, tr;
	var iconsTD = document.createElement("td");
	iconsTD.setAttribute("class", "text-right mt-4");
	iconsTD.setAttribute("colspan", "2");

	var icon1 = document.createElement("i");
	icon1.setAttribute("class", "fas fa-eye fa-2x  mt-1");
	var icon2 = document.createElement("i");
	var iconTR = document.createElement("tr");
	icon2.setAttribute("class", "fas fa-trash-alt ml-4 fa-2x mt-1");
	iconsTD.appendChild(icon1);
	iconsTD.appendChild(icon2);
	for (var k = 0; k < columnCount - 1; k++) {
		tr = document.createElement("tr");
		th = document.createElement("th");
		td = document.createElement("td");
		var thContent = table.children[0].children[0].children[k].textContent;
		var tdContent = table.children[0].children[i].children[k].textContent;
		if (k == columnCount - 2) {
			tdContent = table.children[0].children[i].children[k].children[0]
			tdContent.classList.add("w-100")
			td.appendChild(tdContent)

		} else {
			td.innerHTML = tdContent;
		}
		th.innerHTML = thContent;

		tr.appendChild(th);
		tr.appendChild(td);
		tableStrc.appendChild(tr)
	}
	iconTR.appendChild(iconsTD)
	tableStrc.appendChild(iconTR);
	container.appendChild(tableStrc);

}
var orderList = document.querySelector(".order-list");
$("#referaluzre2").click(function () {
	orderList.setAttribute("style", "display: !important;")
})
$("#referaluzre").click(function () {
	orderList.setAttribute("style", "display:none !important;")
})