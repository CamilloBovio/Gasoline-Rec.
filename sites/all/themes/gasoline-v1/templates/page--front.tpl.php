<?php include 'includes/header.inc'; ?>

 	<div id="content">
 		<div id="featured">
 			<div id="slideshow">
 				<?php print render($page['home_slideshow']); ?>
 				<!--img src="sites/all/themes/gasoline-v1/img/slider.jpg" /-->
 			</div><!--END SLIDESHOW-->
 			<div id="contest">
 				<div id="send_demo">
 					<a href="sendyourdemo"><h3 class="page_title">SEND YOUR<br/>DEMO/<span class="greenblue">/</span></h3></a>				
 				</div><!--END SEND DEMO-->
 				<p>We are always looking for new sounds, styles and trends <br/>in the world of electronic music. We like to deal with the mass without fear of new artistic and musical experimentation. <br/>We are always looking for new talents who want to deal with the public showing their wares and skills. Also our aim is becoming a hub for producers that want to collaborate with us by releasing remixes or new projects. We focus on house, techno and deep electronic music sounds. test yourself. <a href="sendyourdemo">SEND US YOUR DEMO.</a></p>
 			</div><!--END CONTEST-->
 		</div><!--END FEATURED-->
 		<div id="home_blocks">
 			
 			<div class="home_block" id="release_block">
 				<div class="title">
 					<strong><span class="greenblue">/</span>Releases</strong>
 				</div>
 				<?php print render($page['home_releases']); ?>
 			</div><!--END RELEASE BLOCK-->
 			<div class="home_block" id="featuredartist_block">
 				<div class="title">
 					<strong><span class="greenblue">/</span>Featured artists</strong>
 				</div>
 				<?php print render($page['home_artists']); ?>
 			</div><!--END FEATURED BLOCK-->
 			
 			<div class="home_block" id="blog_block">
 				<div class="title">
 					<strong><span class="greenblue">/</span>Blog</strong>
 				</div>
 				<img src="sites/all/themes/gasoline-v1/img/blog.jpg" />
 				<?php //print render($page['home_blog']); ?>
 			</div><!--END BLOG BLOCK-->
 			
 			<div class="home_block last" id="competition_block">
 				<div class="title">
 					<strong><span class="greenblue">/</span>Become media partner</strong>
 				</div>
 				<div class="block_image">
 					<a href="become-media-partner"><img src="sites/all/themes/gasoline-v1/img/competition.jpg" /></a>
 				<?php print render($page['home_partner']); ?>
 				</div><!--END BLOCK IMAGE-->
 			</div><!--END COMPETITION BLOCK-->
 			
 		</div><!--END HOME BLOCKS-->
 	</div><!--END CONTENT-->
 	
 	<?php include 'includes/footer.inc'; ?>
