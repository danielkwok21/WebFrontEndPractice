$(document).ready(()=>{
	$('#sidebarCollapse').on('click', (e)=>{
		$('#sidebar').toggleClass('active')
		e.preventDefault()
	})

	$('.fas').on('click', (e)=>{
		console.log('click')
		if($('#sidebar').hasClass('active')){
			$('#sidebar').removeClass('active')
			const list = $(this).find('.dropdown-toggle')
			list.removeClass('collapsed')
			list.attr('aria-expanded', true)
		}
	})
})