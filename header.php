<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jd
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<!-- Google Tag Manager -->

<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-144905934-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-144905934-1');
</script>

<?php wp_head(); ?>
<script>

var isIE = /*@cc_on!@*/ false || !!document.documentMode;
if (isIE == true) {
  document.getElementsByTagName("html")[0].style.display = "none";
  alert("Navegador não compatível !!!");
}
</script>

</head>

<body id="page" <?php body_class(); ?>>
<div class='block-tela'>
  <?php
    switch($_COOKIE["pll_language"]){
      case "en":
        ?>
        <img class="lazyload img-logo" src="" data-srcset="<?php echo get_template_directory_uri(); ?>/dist/imgs/logo-eng.svg">
        <?php 
      break;
      default:
        ?>
        <img class="lazyload img-logo" src="" data-srcset="<?php echo get_template_directory_uri(); ?>/dist/imgs/logo.svg">
        <?php 
      break;
    }
  ?>
</div>
<!-- Google Tag Manager (noscript) -->

<!-- End Google Tag Manager (noscript) -->


	
