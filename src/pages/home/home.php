<section class="inicial">
	<div class="yt-play">
		<video 
		id="inicial-video"
		loop  
		poster="<?php echo get_dados('capa_video') ?>">
		<source src="<?php echo get_dados('video_inicial'); ?>" type="video/mp4"></source>
		Your browser does not support the video tag.
		</video>
		<div class="mask"></div>
		<div class="btn-play"></div>
	</div>
	<?php get_componet_jd('modal'); ?>
</section>