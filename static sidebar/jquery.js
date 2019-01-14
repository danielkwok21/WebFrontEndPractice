$(document).ready(()=>{
	$('#sidebarCollapse').on('click', (e)=>{
		$('#sidebar').toggleClass('active')
		e.preventDefault()
	})
})