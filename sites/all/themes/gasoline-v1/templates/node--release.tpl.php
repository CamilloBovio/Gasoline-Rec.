<div class="title_page">RELEASES/<span class="greenblue">/</span>
	<a href="#" onclick="history.back();return false;">Back</a>
</div><!--END TITLE PAGE-->

<div id="col1" class="col">
	<?php print render($content['field_copertina']['0']); //STAMPA SOLO LA PRIMA IMMAGINE IN LISTA?>
		<?php print render($content['field_beatport_link']); //BIOGRAFIA ?>
	<!--p><a href="#">Book this artist</a></p-->
</div><!--END COL_ARTIST-->
		
<div class="col">

	<h2><?php print render($content['field_artista']); //BIOGRAFIA ?>/<span class="greenblue">/</span> - <?php print $node->title; //NOME TRACCIA ?></h2><!--END ARTIST NAME-->

	<p><strong>Artist:</strong> <?php print render($content['field_artista']); //BIOGRAFIA ?></p>
 	<p><strong>Name:</strong> <?php print $node->title; //NOME TRACCIA ?></p>
 	<p><strong>Release date:</strong> <?php print render($content['field_release_date']); //BIOGRAFIA ?></p>
 	<p><strong>Catalog:</strong> <?php print render($content['field_catalog']); //BIOGRAFIA ?></p>
 	<p><strong>Genre:</strong> <?php print render($content['field_genere']); //BIOGRAFIA ?></p>
 	<p><strong>Year:</strong> <?php print render($content['field_anno']); //BIOGRAFIA ?></p><br/>
 	<p><strong>Description:</strong><br/><?php print render($content['field_description']); //BIOGRAFIA ?></p>
</div><!--END COL-->

<div class="col">
	<div class="soundcloud">
		<?php print render($content['field_sound_test']); //BIOGRAFIA ?>
	</div><!--END SOUNDCLOUD PLAYER-->
</div><!--END COL-->
