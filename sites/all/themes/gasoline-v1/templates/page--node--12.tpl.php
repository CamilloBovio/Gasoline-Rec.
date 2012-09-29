<?php include 'includes/header.inc'; ?>
<div id="content">
 		 	
 		 	<?php print render($tabs); ?>
 		 	
 		 	<div id="col_form_sx">
					<!--img src="<?php print base_path() . path_to_theme() . "/img/senddemo.jpg"; ?>" /-->
					
				<h3 class="page_title">ABOUT/<span class="greenblue">/</span></h3>
		
				
			</div><!--END COL FORM SX-->
				
			<div id="contenuto_form">
					
					<div class="col">
						<?php print render($page['content']); ?>
					</div>
					
			</div><!--END CONTENUTO FORM-->

 	</div><!--END CONTENT-->
<?php include 'includes/footer.inc'; ?>