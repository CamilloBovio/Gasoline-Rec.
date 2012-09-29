 	<div id="social">
 		<!--div id="social_title">
	 		<div class="title">
	 			<strong><span class="greenblue">/</span>Social</strong>
	 		</div>
 		</div--><!--END SOCIAL TITLE-->
 		<div class="home_block footer_block">
 			<div class="title">
	 			<strong><span class="greenblue">/</span>Twitter</strong>
	 		</div>
	 		<?php print render($page['twitter']); ?>
	 	</div><!--END HOME BLOCK-->
	 	
	 	<div class="home_block footer_block">
	 		<div class="title">
	 			<strong><span class="greenblue">/</span>Facebook</strong>
	 		</div>
	 	
		 	<?php print render($page['facebook']); ?>
	 	</div><!--END HOME BLOCK-->
	 	
	 	<div class="home_block footer_block">
		 	<div class="title">
	 			<strong><span class="greenblue">/</span>Social links</strong>
	 		</div>
		 	<?php //print render($page['social_icons']); ?>
			 	
			 	<a href="http://www.beatport.com/label/gasoline-records/8804" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/beatport.png"; ?>"/>
			 	</a>
			 	<a href="https://soundcloud.com/gasoline-records-italia" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/soundcloud.png"; ?>"/>
			 	</a>
			 	<a href="http://www.mixcloud.com/gasoline/" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/mixcloud.png"; ?>"/>
			 	</a>
			 	<a href="http://www.facebook.com/gasolinerecordsitalia" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/facebook.png"; ?>"/>
			 	</a>
			 	<a href="https://twitter.com/GasolineRec" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/twitter.png"; ?>"/>
			 	</a>
			 	<a href="http://www.youtube.com/user/GasolineRecordsIta" target="_blank">
			 		<img src="<?php print base_path() . path_to_theme() . "/img/social/youtube.png"; ?>"/>
			 	</a>
	 	</div><!--END HOME BLOCK-->
	 	
	 	<!--div class="home_block">
	 		<?php //print render($page['youtube']); ?>
	 	</div--><!--END HOME BLOCK-->
 	
 	</div><!--END SOCIAL-->
 	
 	<div id="sign">Designed and developed by <strong><a href="mailto:camillo.bovio@gmail.com">CABDESIGN</a></strong></div><!--END SIGN-->
 
 </div><!--END WRAP-->
