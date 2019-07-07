<?php 

function get_dados($field, $id = null)
{
  global $wp_query;
  
	if(empty($id))
	{
		switch($_COOKIE["linguagem"]){
			case "en":
				$linguagem = 74;
			break;
			case "es":
				$linguagem = 102;
			break;
			default:
				$linguagem = 7;
			break;
		}
		$id = $linguagem;
	}
	return get_field($field, $id);
}

function verify_link($value)
{
	$data = '';

	if(isset($value['link']['url']))
	{
		$data = $value['link']['url'];
	}
	else if(isset($value['url']))
	{
		$data = $value['url'];
	}

	return $data;
}