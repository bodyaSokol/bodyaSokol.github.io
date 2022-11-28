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
		const prevent = ev => ev.preventDefault();
		document.addEventListener('wheel', prevent, {passive: false});
		popup_wrap.addEventListener("click",function(e){
			if(e.target.id=="popup_close"||e.target.id=="popup_wrap"){
				popup_wrap.style.display="none";
				document.querySelector(`.${content_type}`).style.display="none";
				document.removeEventListener('wheel', prevent);
			}
		})
	}
}