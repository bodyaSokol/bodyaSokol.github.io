language_switcher.addEventListener("click",function(){
	let unvisible_style = language_switcher_unvisible.style;
	unvisible_style.display = (!unvisible_style.display||unvisible_style.display=="none")? "block":"none";
})
language_switcher_2.addEventListener("click",function(){
	let unvisible_style = language_switcher_unvisible_2.style;
	unvisible_style.display = (!unvisible_style.display||unvisible_style.display=="none")? "block":"none";
})
drop_down_menu_switcher.addEventListener("click",function(){
	let unvisible_style = drop_down_menu.style;
	unvisible_style.display = (!unvisible_style.display||unvisible_style.display=="none")? "block":"none";
})

function showPopup(content_type){
	if(!popup_wrap.style.display||popup_wrap.style.display=="none"){
		popup_wrap.style.display="flex";
		document.querySelector(`.${content_type}`).style.display="block";
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = "8px";
		popup_wrap.addEventListener("click",function(e){
			if(e.target.id=="popup_close"||e.target.id=="popup_wrap"){
				console.log("test");
				popup_wrap.style.display="none";
				document.querySelector(`.${content_type}`).style.display="none";
				document.body.style.overflow = "visible";
				document.body.style.paddingRight = "0px";
			}
		})
	}
}
showPopup("popup_type_chat");

forCopy_button.addEventListener("click",function(){
	var str = forCopyText.innerText;
	const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})

function p2p_turn_on_page(page){
	let pages = ["p2p_my_trades","p2p_sell","p2p_my_offers","p2p_archive","p2p_buy"];
	pages.forEach(function(page){
		document.getElementById(`${page}`).style.display="none";
		document.getElementById(`${page}_button`).classList.remove("black_box_header_menu_button_active");
	})

	document.getElementById(`${page}`).style.display="block";
	document.getElementById(`${page}_button`).classList.add("black_box_header_menu_button_active");
}
function menu_turn_on_page(page){
	let pages = ["menu_main","menu_market","menu_p2p"];
	pages.forEach(function(page){
		document.getElementById(`${page}`).style.display="none";
		document.getElementById(`${page}_button`).classList.remove("drop_down_menu_buttons_element_gradient");
		document.getElementById(`${page}_button_add`).classList.remove("main_block_center_top_element_menu_active");
	})
	document.getElementById(`${page}`).style.display="block";
	document.getElementById(`${page}_button`).classList.add("drop_down_menu_buttons_element_gradient");
	document.getElementById(`${page}_button_add`).classList.add("main_block_center_top_element_menu_active");
}
function market_turn_on_page(page){
	let pages = ["market_archive","market_my_accounts","market_my_services"];
	pages.forEach(function(page){
		document.getElementById(`${page}`).style.display="none";
		document.getElementById(`${page}_button`).classList.remove("black_box_header_menu_button_active");
	})

	document.getElementById(`${page}`).style.display="block";
	document.getElementById(`${page}_button`).classList.add("black_box_header_menu_button_active");
}