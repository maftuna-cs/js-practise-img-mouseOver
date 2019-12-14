let image = document.getElementById('celeb');

function changeToLike()
{
image.src="img/shahzoda.jpg";
}

function changeToDislike()
{
image.src="img/rayhon.jpg";
}

image.addEventListener('mouseover', changeToLike);
image.addEventListener('mouseout', changeToDislike);


