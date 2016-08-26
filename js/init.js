(function($){
	$(function(){
		$('.button-collapse').sideNav();
	}); 

	$('.collection-item').click(function(){
		$.get(`posts/${$(this).attr('href').slice(1)}.md`, function(data, status){
	        $('#modalPost').html(`
	        	<div class="modal-content">
					${mmd(data)}
				</div>
				<div class="modal-footer">
					<a href="#!" class="modal-action modal-close waves-effect waves-brown btn-flat">Fechar</a>
				</div>
	        `);
	        $('#modalPost').openModal();
	    });
	})

	$(document).ready(function() {
		$('.modal-trigger').leanModal();

		var mdPost = location.hash.slice(1); 
		if(mdPost != "" && mdPost != undefined){
			$.get(`posts/${mdPost}.md`, function(data, status){
		        $('#modalPost').html(`
		        	<div class="modal-content">
						${mmd(data)}
					</div>
					<div class="modal-footer">
						<a href="#" class="modal-action modal-close waves-effect waves-brown btn-flat">Fechar</a>
					</div>
		        `);
		        $('#modalPost').openModal();
		    });
		}
	});

  // end of document ready
})(jQuery); // end of jQuery name space