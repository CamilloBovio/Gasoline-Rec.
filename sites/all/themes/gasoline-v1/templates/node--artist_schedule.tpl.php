<div class="title_page">ARTISTS/<span class="greenblue">/</span>
	<a href="#" onclick="history.back();return false;">Back</a>
</div><!--END TITLE PAGE-->
<div id="col1" class="col">
	<?php print render($content['field_foto_scheda']['0']); //STAMPA SOLO LA PRIMA IMMAGINE IN LISTA?>
	<p><?php print render($content['field_presskit']); //BIOGRAFIA ?></p>
	<!--p><a href="#">Book this artist</a></p-->
	</div><!--END COL_ARTIST-->
 				
		
		<div class="col">
			<h2><?php print $node->title; //NOME ARTISTA ?>/<span class="greenblue">/</span></h2><!--END ARTIST NAME-->
			<?php print render($content['body']); //BIOGRAFIA ?>
		</div><!--END COL-->
		<div class="col">
				<?php print render($content['field_sound_test']); //BIOGRAFIA ?>
		</div><!--END COL-->