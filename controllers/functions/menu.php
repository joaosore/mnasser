<?php 

function get_menu()
{
  $menus = wp_get_nav_menu_items('menu_pt');
	return $menus;
}