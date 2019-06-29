<?php 

function get_id_video($video)
{
// get iframe HTML
$iframe = $video;
// use preg_match to find iframe src
preg_match('/src="(.+?)"/', $iframe, $matches);
$src = $matches[1];
$src = str_replace('?feature=oembed', '', $src);
$src = str_replace('https://www.youtube.com/embed/', '', $src);

return $src;
}