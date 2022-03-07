let drop_li = document.querySelectorAll("#dropdown>li");
// console.log(drop_li)
for( i = 0; i < drop_li.length; i++) {
    drop_li[i].addEventListener("click", function() {
        let mini_drop = document.querySelectorAll("#dropdown>li>ul");
        for(let j = 0; j < mini_drop.length;j++) {
            mini_drop[j].style.display = "none";
            console.log("cliked");
        }
       this.children[1].style.display = "block";
    })
}