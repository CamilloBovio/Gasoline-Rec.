<div id="wrap">
 	<div id="header">
 		<div id="logo">
	 		<a href="<?php print $front_page; ?>"><img src="<?php print base_path() . path_to_theme() . "/img/logo.jpg"; ?>"/></a>
 		</div>
 		<div id="menu">
 			<?php if ($main_menu): ?>
		        <?php print theme('links__system_main_menu', array(
		          'links' => $main_menu,
		          'attributes' => array(
		            'id' => 'main-menu-links',
		            'class' => array('links', 'clearfix'),
		          ),
		          'heading' => array(
		            'text' => t('Main menu'),
		            'level' => 'h2',
		            'class' => array('element-invisible'),
		          ),
		        )); ?>
    		<?php endif; ?>
 		</div><!--END MENU-->
</div><!--END HEADER-->