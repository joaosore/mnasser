<?php
/**
 * 
 * Template Name: Home
 *
 * @package jd
 *
 */

get_header(); 

?>
<div class="barba-container" data-namespace="pagehome">
	<div id="body-class" <?php body_class(); ?>></div>
	<?php get_page_jd('home'); ?>

	<?php echo get_componet_jd('footer'); ?>
</div>
<?php 

get_footer();