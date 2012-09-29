<?php

/**
 * @file
 * Customize the display of a complete webform.
 *
 * This file may be renamed "webform-form-[nid].tpl.php" to target a specific
 * webform on your site. Or you can leave it "webform-form.tpl.php" to affect
 * all webforms on your site.
 *
 * Available variables:
 * - $form: The complete form array.
 * - $nid: The node ID of the Webform.
 *
 * The $form array contains two main pieces:
 * - $form['submitted']: The main content of the user-created form.
 * - $form['details']: Internal information stored by Webform.
 */
?>

<div id="col_form_sx">
	<!--img src="<?php print base_path() . path_to_theme() . "/img/senddemo.jpg"; ?>" /-->
	
	<h3 class="page_title">SEND YOUR<br/>DEMO/<span class="greenblue">/</span></h3>

	<p style="margin-top:20px;">
		We are always looking for new sounds, styles and trends<br/>
in the world of electronic music. We like to deal with the mass without fear of new artistic and musical experimentation.<br/>
We are always looking for new talents who want to deal with the public showing their wares and skills. Also our aim is becoming a hub for producers that want to collaborate with us by releasing remixes or new projects. We focus on house, techno and deep electronic music sounds. test yourself. 
	</p>

</div><!--END COL FORM SX-->

<div id="contenuto_form">
	
	<?php
  // Print out the main part of the form.
  // Feel free to break this up and move the pieces within the array.
  print drupal_render($form['submitted']);

  // Always print out the entire $form. This renders the remaining pieces of the
  // form that haven't yet been rendered above.
  print drupal_render_children($form);
  
?>
	
</div><!--END CONTENUTO FORM-->
