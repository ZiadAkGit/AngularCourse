const jsonFile = {
	categories: {
		"Dress Watches": {
			description:
				"Dress watches are designed with elegance and formality in mind, often featuring a slim profile, minimalistic dials, and classic design elements. These watches are the epitome of refined luxury, typically worn with formal attire. Brands known for dress watches focus on timeless aesthetics, precision craftsmanship, and high-quality materials, emphasizing subtle sophistication over ostentation.",
			watches: {
				"Patek Philippe Calatrava": {
					details:
						"An icon of Swiss watchmaking, the Patek Philippe Calatrava embodies the brand's philosophy of understated elegance. Its minimalist design, characterized by a polished round case and clean dial, showcases fine craftsmanship and is often regarded as the quintessential dress watch. A true collector's piece, it represents timeless sophistication in any formal setting.",
					price: "$35,000",
				},
				"Rolex Cellini": {
					details:
						"The Rolex Cellini line represents Rolex’s commitment to elegance outside of their sportier models. Made from premium materials such as 18k gold and featuring a thinner profile than the brand’s professional watches, the Cellini is crafted for the discerning wearer who appreciates a combination of tradition and luxury. It exudes refinement and class, making it an exquisite choice for formal events.",
					price: "$18,000",
				},
				"Omega De Ville": {
					details:
						"Omega's De Ville collection merges classic aesthetics with cutting-edge watchmaking technology. Known for its slender case and sleek, timeless design, this series often features automatic movements with Co-Axial escapements for precision. It's the perfect companion for those who seek a mix of traditional style and modern functionality in their formal wear.",
					price: "$5,500",
				},
				"Jaeger-LeCoultre Master Control": {
					details:
						"Jaeger-LeCoultre’s Master Control line reflects the brand’s legacy of high-quality craftsmanship and innovation. Its design highlights a perfect balance between simplicity and refinement, featuring a polished case, clean lines, and a legible dial. With a history of producing timepieces for royalty and dignitaries, the Master Control is ideal for business and formal settings where elegance matters.",
					price: "$9,000",
				},
			},
		},
		"Diving Watches": {
			description:
				"Diving watches are engineered for underwater exploration and adventure, built to be both functional and durable in the most extreme conditions. These watches are characterized by their high water resistance, luminous hands and markers for underwater readability, and unidirectional rotating bezels for tracking dive times. Famous brands in this category combine technical prowess with rugged design, appealing to both professional divers and watch enthusiasts who appreciate robust functionality.",
			watches: {
				"Rolex Submariner": {
					details:
						"The Rolex Submariner is arguably the most iconic diving watch in history. Its robust Oyster case, screw-down crown, and unidirectional bezel make it highly reliable in deep-sea environments, while its luxurious design and craftsmanship allow it to be worn just as comfortably outside the water. A symbol of adventure, it is often seen as the benchmark for diving watches.",
					price: "$12,000",
				},
				"Omega Seamaster": {
					details:
						"Featured in the James Bond films, the Omega Seamaster is renowned for its mix of style and diving capabilities. With features like a helium escape valve and excellent water resistance, it is the go-to choice for professionals. Its bold design and rugged reliability make it a watch that performs equally well in both formal settings and extreme underwater environments.",
					price: "$6,500",
				},
				"Tag Heuer Aquaracer": {
					details:
						"The Tag Heuer Aquaracer is designed for both sporting performance and style. With its rotating bezel, luminous indices, and impressive water resistance, it’s ideal for diving, but its sleek and sporty aesthetic makes it a versatile timepiece for both active and casual wear. It reflects Tag Heuer’s commitment to precision and innovation in extreme conditions.",
					price: "$3,000",
				},
				"Seiko Prospex": {
					details:
						"Seiko’s Prospex series has built a strong reputation among professional divers for its reliability and affordability. Known for its durable case, impressive water resistance, and value-driven pricing, the Prospex delivers all the features required for serious diving while maintaining a utilitarian design that appeals to adventurers on land as well.",
					price: "$500",
				},
			},
		},
		"Field Watches": {
			description:
				"Field watches are rugged timepieces designed for tough outdoor conditions, inspired by military-style watches worn in the field. They typically feature durable materials, legible dials, and precise movements for maximum reliability. Brands producing field watches often focus on functionality, simplicity, and strength, making them ideal for those seeking a watch capable of withstanding the elements while offering clear readability and a robust, no-nonsense design.",
			watches: {
				"Hamilton Khaki Field": {
					details:
						"The Hamilton Khaki Field watch is a nod to the brand’s history of producing military watches. Its rugged, practical design includes a sturdy case, clear numerals, and a highly durable strap, built for adventurers and outdoor enthusiasts. Known for its Swiss-made movement, this watch is an excellent blend of form and function.",
					price: "$600",
				},
				"Seiko Field Watch": {
					details:
						"Seiko’s Field Watch is valued for its durability, reliability, and no-frills approach to timekeeping. With a rugged case, easy-to-read dial, and robust quartz or automatic movements, this watch is crafted for individuals who require a watch that can handle the rigors of outdoor life without sacrificing accuracy or durability.",
					price: "$300",
				},
				"Longines Heritage Military": {
					details:
						"Longines draws inspiration from vintage military watches for the Heritage Military series. With a classic, historically accurate design and modern Swiss technology, this timepiece combines old-world charm with contemporary precision. It’s built for those who appreciate the history of military watch design while demanding modern functionality and craftsmanship.",
					price: "$2,000",
				},
				"Casio G-Shock": {
					details:
						"Known for being virtually indestructible, the Casio G-Shock series is a favorite among adventurers and military personnel alike. Its shock-resistant construction, water resistance, and multiple functions (including alarms, stopwatch, and world time) make it a versatile tool for those in harsh environments. The G-Shock’s bold design also makes it a statement piece for casual wear.",
					price: "$150",
				},
			},
		},
		"Chronograph Watches": {
			description:
				"Chronograph watches feature a stopwatch function combined with a display watch, adding both style and utility. These watches are known for their precision in timing and are often associated with motorsports and aviation. Chronographs are typically more complicated than traditional watches, making them a favorite among those who appreciate mechanical craftsmanship and sporty aesthetics.",
			watches: {
				"Patek Philippe Chronograph 5170": {
					details:
						"The Patek Philippe Chronograph 5170 is a masterpiece of mechanical artistry. Known for its elegant design and high complication, it features a hand-wound chronograph movement. This timepiece reflects Patek Philippe’s commitment to precision and luxury, offering both aesthetic beauty and technical innovation.",
					price: "$85,000",
				},
				"Rolex Daytona": {
					details:
						"One of the most iconic chronographs, the Rolex Daytona is synonymous with motorsport and high-speed precision. Its robust design, legendary accuracy, and association with racing culture make it a timeless choice for those who value performance and luxury. The Daytona is a collector’s favorite due to its heritage and superior craftsmanship.",
					price: "$45,000",
				},
				"Omega Speedmaster Professional": {
					details:
						"The Omega Speedmaster Professional, also known as the 'Moonwatch', is famous for being the first watch worn on the moon. With its tachymeter bezel and manual-winding chronograph movement, the Speedmaster is revered not only for its history in space exploration but also for its robust performance and precision.",
					price: "$7,500",
				},
				"Tag Heuer Carrera": {
					details:
						"Tag Heuer's Carrera collection is designed with motorsport in mind, offering sleek, modern aesthetics combined with a high-performance chronograph movement. The Carrera is perfect for those who love the excitement of racing and desire a bold, stylish watch that offers both functionality and flair.",
					price: "$4,500",
				},
			},
		},
	},
};
const names = document.getElementsByTagName("h3");
const imgs = document.getElementsByTagName("img");
const all_data = document.getElementsByTagName("p");

function moveNext(event) {
	var current_div;
	const clicked_name =
		event.parentElement.getElementsByTagName("h3")[0].textContent;
	const all_divs = document.getElementsByTagName("div");
	const delete_divs = [];
	let counter = 0;
	for (let i = 0; i < all_divs.length; i++) {
		const div = all_divs[i];
		if (clicked_name == div.getElementsByTagName("h3")[0].textContent) {
			current_div = div;
		} else {
			delete_divs[counter] = div;
			counter++;
		}
	}
	for (let i = 0; i < delete_divs.length; i++) {
		const element = delete_divs[i];
		element.remove();
	}
	current_div.style.width = "45%";
	current_div.style.alignItems = "center";
	current_div.style.marginBottom = "6%";
	current_div.getElementsByTagName("button")[0].remove();
	const current_cat = document.getElementsByTagName("h1")[0].textContent;
	const current_watch_details =
		jsonFile["categories"][current_cat]["watches"][clicked_name]["details"];
	const current_watch_price =
		jsonFile["categories"][current_cat]["watches"][clicked_name]["price"];
	current_div.getElementsByTagName("p")[0].innerText = current_watch_details;
	current_div.getElementsByTagName("p")[1].textContent = current_watch_price;
}
