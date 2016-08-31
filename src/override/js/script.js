$(document).ready(function() {

	
	function setBGImage() {
		var bingImage = "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";

		$.getJSON(bingImage, function(res) {
			bgImage = res.images[0].url;
			bgImage = "http://www.bing.com" + bgImage;
			console.log(bgImage);

			//document.body.style.backgroundImage = "url('" + bgImage + "')";

			$("body").css({
				"background": "url('" + bgImage + "') no-repeat center center fixed",
				"background-size": "cover"
			});

		});
	}


	setBGImage();

});