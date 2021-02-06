const list = document.querySelectorAll("#list.star");

for(let index=0, len=list.length; index < len; index++) {
    console.log(list[index].href);
}