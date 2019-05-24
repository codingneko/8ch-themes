$("#post-form-inner input[type='submit']").remove();
$("#post-form-inner form[name='post']").append('<input accesskey="s" style="margin-left:2px;" type="submit" name="post" value="New post">');

document.querySelectorAll('.op').forEach((element) => {
	if(!element.classList.contains('has-file')){
		element.parentElement.querySelector('.files').style = "margin-top:0px;";
	}
});