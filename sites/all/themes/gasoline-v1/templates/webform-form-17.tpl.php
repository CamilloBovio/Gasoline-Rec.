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
	
	<h3 class="page_title">BECOME<br/>MEDIA PARTNER/<span class="greenblue">/</span></h3>

		<ul style="margin-top:20px;">
			<li><div class="black">Have a web radio or a radio show?</div></li>
			<li><div class="black">Are a host of a podcast of electronic music?</div></li>
			<li><div class="black">Are an online magazine for electronic music?</div></li>
			<li><div class="black">Do you have a product to promote <br/>and seek a partner?</div></li>
		</ul>
		<p>
Gasoline Rec. is open to work in various capacities with experts in the industry by providing his history and his know-how, his contacts, and experience with the artists.<br/>

Contributions can range from the granting of demos (whether physical or digital media) for review purposes, to broadcast Gasoline Rec.'s productions exclusively on your media channels.<br/>

Gasoline is also open-minded to the development of ad hoc collaborations according to the needs.
	</p>
<p><strong>SHARE YOUR IDEA WITH US</strong></p>

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
