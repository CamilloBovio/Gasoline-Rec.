<?php 
/*
TEMPLATE CHE GESTISCE LA VISTA IN GENERALE. 
I SINGOLI CAMPI VENGONO GESTITI, NEL DETTAGLIO DA:  

views-view-fields--artists-views.tpl.php

*/ ?>

<div class="title_page">RELEASES/<span class="greenblue">/</span></div><!--END TITLE PAGE-->
<?php if ($rows): ?>
	<?php print $rows; ?>
<?php elseif ($empty): ?>
    <?php print $empty; ?>
<?php endif; ?>
