const names = document.getElementsByTagName("h3");
const imgs = document.getElementsByTagName("img");
const all_data = document.getElementsByTagName("p");

function moveNext(event) {
	const clicked_name =
		event.parentElement.getElementsByTagName("h3")[0].textContent;
	const clicked_img = event.parentElement.getElementsByTagName("img")[0].src;
	const clicked_p =
		event.parentElement.getElementsByTagName("p")[0].textContent;
	const all_divs = document.getElementsByTagName("div");
	console.log(all_divs);

	for (let i = 0; i < all_divs.length; i++) {
		const div = all_divs[i];
		if (clicked_name == div.getElementsByTagName("h3")[0].textContent) {
			continue;
		}
		console.log(div);
		div.remove();
	}
}
