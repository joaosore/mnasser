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

<header>
<ul class="menu">
    <?php 
      foreach(get_dados('menus') as $key => $value) {
    ?>
      <li data-menu="<?php echo $value['item']['url']; ?>">
        <a href="<?php echo $value['item']['url']; ?>">
        <?php echo $value['item']['title']; ?>
        </a>
      </li>
    <?php 
      }
    ?>
  </ul>
  <ul class="lg">
    <li>
      <a href="/" data-lg="pt">
        PT
      </a>
    </li>
    <li>
      <a href="/" data-lg="en">
        EN
      </a>
    </li>
    <li>
      <a href="/" data-lg="es">
        ES
      </a>
    </li>
  </ul>
</header>

<section class="box-logo">
  <div class="logo">
    <div class="box">
        <?php
          switch($_COOKIE["linguagem"]){
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
  </div>
</section>

<section class="video proposito">
  <video
  class="play-viedo"
  loop
  playsinline
  poster="<?php echo get_dados('capa_video'); ?>"
  src="<?php echo get_dados('video_inicial'); ?>"
  ></video>
</section>

<section class="conceito">
  <div class="conteudo">
    <h1><?php echo get_dados('titulo_conceitos'); ?></h1>
    <?php echo get_dados('conteudo_conceitos'); ?>
  </div>
</section>

<section class="inspiracao">
  <div class="conteudo">
    <h1><?php echo get_dados('titulo_inpiracao'); ?></h1>
    <?php echo get_dados('conteudo_inpiracao'); ?>
  </div>
</section>

<section class="pessoas">
  <?php foreach(get_dados('integrante') as $key => $value) { ?>
    <div class="pessoa">

      <div class="dados">

        <div class="nome">
          <?php echo $value['nome']; ?>
        </div>
        <div class="email">
          <?php echo $value['email']; ?>
        </div>
        <div class="btns-redes">
          <a href="<?php echo $value['vcard']; ?>" target="_blank" download="contato.vcf">
            <img class="lazyload" src="" data-srcset="<?php echo get_template_directory_uri(); ?>/dist/imgs/vcard.png">
          </a>
          <a href="<?php echo $value['linkedin'] ?>" target="_blank">
            <img class="lazyload" src="" data-srcset="<?php echo get_template_directory_uri(); ?>/dist/imgs/linkedin.png">
          </a>
        </div>
          
        <?php if(!empty($value['biografia'])) { ?>
          <div>
            <?php echo $value['biografia']; ?>
          </div>
        <?php } ?>

        <?php if(!empty($value['formacao_titulo'])) { ?>
          <div>
            <div class="titulo">
              <?php echo $value['formacao_titulo']; ?>
            </div>
            <div class="item">
              <?php echo $value['formacao']; ?>
            </div>
          </div>
        <?php } ?>

        <?php if(!empty($value['historico_profissional_no_exterior_titulo'])) { ?>
          <div>
            <div class="titulo">
              <?php echo $value['historico_profissional_no_exterior_titulo']; ?>
            </div>
            <div class="item">
              <?php echo $value['historico_profissional_no_exterior']; ?>
            </div>
          </div>
        <?php } ?>

        <?php if(!empty($value['docencia_titulo'])) { ?>
          <div>
            <div class="titulo">
              <?php echo $value['docencia_titulo']; ?>
            </div>
            <div class="item">
              <?php echo $value['docencia']; ?>
            </div>
          </div>
        <?php } ?>
        
        <?php if(!empty($value['principais_publicacoes_titulo'])) { ?>
          <div>
            <div class="titulo">
              <?php echo $value['principais_publicacoes_titulo']; ?>
            </div>
            <div class="item">
              <?php echo $value['principais_publicacoes']; ?>
            </div>
          </div>
        <?php } ?>
        
      </div>

      <div class="foto">
        <img class="img-person" src="<?php echo $value['foto']; ?>"/>
      </div>

    </div>
  <?php } ?>
</section>

<section class="experiencia">
  <div class="conteudo">
    <h1><?php echo get_dados('titulo_experiencia'); ?></h1>
    <?php echo get_dados('conteudo_experiencia'); ?>
    <div class="btn-modal judicial">
      <span><?php echo get_dados('contencioso_judicial_titulo'); ?></span>
    </div>

    <div class="box judicial">
      <div class="btn-close"></div>
      <?php foreach(get_dados('contencioso_judicial') as $key => $value) { ?>
        <div class="item">
          <?php
            echo $value['artigo'];
          ?>
        </div>
      <?php } ?>
    </div>

    <div class="btn-modal arbitragem">
      <span><?php echo get_dados('arbitragem_titulo'); ?></span>
    </div>

    <div class="box arbitragem">
      <div class="btn-close"></div>
      <?php foreach(get_dados('arbitragem') as $key => $value) { ?>
        <div class="item">
          <?php
            echo $value['artigo'];
          ?>
        </div>
      <?php } ?>
    </div>

  </div>
</section>

<section class="imprensa">
  <div class="conteudo">
    <?php foreach(get_dados('artigos') as $key => $artigo) { ?>
      <div class="item">
        <div class="acordion">
          <div class="titulo">
            <?php echo $artigo['titulo']; ?>
          </div>
          <div class="box-conteudo">
            <?php echo $artigo['conteudo']; ?>
          </div>
          <div class="fonte">
            Fonte: <?php echo $artigo['fonte']; ?>
          </div>
        </div>
      </div>
    <?php } ?>
  </div>
</section>

<section class="contato">
  <div class="conteudo">
    <?php echo get_dados('dados'); ?>
    <div class="redes">
      <?php foreach (get_dados('redes_sociais') as $key => $value) { ?>
        <div class="rede">
          <a href="<?php echo $value['url']; ?>" target="_blank">
            <img class="lazyload img-logo" src="" data-srcset="<?php echo $value['imagem']; ?>"/>
          </a>
        </div>
      <?php } ?>
    </div>
  </div>
</section>

<?php

get_footer();