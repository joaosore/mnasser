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

<div class="menu-hamburger">
<img class="lazyload img-logo" src="" data-srcset="<?php echo get_template_directory_uri(); ?>/dist/imgs/menu-button.svg">
</div>

<header>
<div class="close-c"></div>
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

<div id="fullpage">

  <div class="section">
    <div class="video">
    <video
      class="play-viedo"
      loop
      playsinline
      poster="<?php echo get_dados('capa_video'); ?>"
      src="<?php echo get_dados('video_inicial'); ?>"
    ></video>
    </div>
    <div class="moldura">
      <p><?php echo get_dados('rodape_moldura'); ?></p>
      <p>SCROLL</p>
    </div>
  </div>


  <div class="section">
    <div class="conceito h-100">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-3 d-none d-lg-flex h-100"></div>
          <div class="col-md-8 box h-100">
            <h2><?php echo get_dados('titulo_conceitos'); ?></h2>
            <?php echo get_dados('conteudo_conceitos'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="inspiracao h-100">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-3 d-none d-lg-flex h-100"></div>
          <div class="col-md-8 box h-100">
            <h2><?php echo get_dados('titulo_inpiracao'); ?></h2>
            <?php echo get_dados('conteudo_inpiracao'); ?>
          </div>
        </div>
      </div>
    </div>
  </div>


  <?php 
    foreach(get_dados('integrante') as $key => $value) {
  ?>
  <div class="section">
    <div class="pessoas item_<?php echo $key; ?> <?php  if($key == 0){ echo 'paulo-magalhaes-nasser'; } ?> h-100">
      <div class="container-fluid h-100">
        <div class="row h-100 
        <?php 
          if($key % 2 != 0) {
            echo 'reverse';
          }
        ?>
        ">
          <div class="col-md-6 h-100 box-conteudo">
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
            
            <div class="thumb-carousel">
              <ul>
                <?php if(!empty($value['biografia'])) { ?>
                  <li>biografia</li> 
                <?php } ?>
                <?php if(!empty($value['formacao_titulo'])) { ?>
                  <li>Formação</li> 
                <?php } ?>
                <?php if(!empty($value['historico_profissional_no_exterior_titulo'])) { ?>
                  <li>Histórico Profissional no Exterior</li> 
                <?php } ?>
                <?php if(!empty($value['docencia_titulo'])) { ?>
                  <li>Docência</li> 
                <?php } ?>
                <?php if(!empty($value['principais_publicacoes_titulo'])) { ?>
                  <li>Principais publicações</li> 
                <?php } ?>
              </ul>
            </div>

            <div class="owl-carousel owl-theme pessoas">
              <?php if(!empty($value['biografia'])) { ?>
                <div class="item">
                  <?php echo $value['biografia']; ?>
                </div>
              <?php } ?>
              <?php if(!empty($value['formacao_titulo'])) { ?>
                <div class="item">
                  <?php echo $value['formacao']; ?>
                </div>
              <?php } ?>
              <?php if(!empty($value['historico_profissional_no_exterior_titulo'])) { ?>
                <div class="item">
                  <?php echo $value['historico_profissional_no_exterior']; ?>
                </div>
              <?php } ?>
              <?php if(!empty($value['docencia_titulo'])) { ?>
                <div class="item">
                  <?php echo $value['docencia']; ?>
                </div>
              <?php } ?>
              <?php if(!empty($value['principais_publicacoes_titulo'])) { ?>
                <div class="item">
                  <?php echo $value['principais_publicacoes']; ?>
                </div>
              <?php } ?>
            </div>
<!-- 
            <div class="box-scroll">

              <div class="scroll-enable-up"></div>
              <div class="scroll-enable-down"></div>
              <div class="scroll-c">
                <?php 
                  if(!empty($value['biografia'])) {
                ?>
                  <div>
                    
                  </div>
                <?php 
                  }
                ?>
                
                <?php 
                  if(!empty($value['formacao_titulo'])) {
                ?>
                  <div>
                    <div class="titulo">
                      <?php echo $value['formacao_titulo']; ?>
                    </div>
                    <div class="item">
                      <?php echo $value['formacao']; ?>
                    </div>
                  </div>
                <?php 
                  }
                ?>
                
                <?php 
                  if(!empty($value['historico_profissional_no_exterior_titulo'])) {
                ?>
                  <div>
                    <div class="titulo">
                      <?php echo $value['historico_profissional_no_exterior_titulo']; ?>
                    </div>
                    <div class="item">
                      <?php echo $value['historico_profissional_no_exterior']; ?>
                    </div>
                  </div>
                <?php 
                  }
                ?>

                <?php 
                  if(!empty($value['docencia_titulo'])) {
                ?>
                  <div>
                    <div class="titulo">
                      <?php echo $value['docencia_titulo']; ?>
                    </div>
                    <div class="item">
                      <?php echo $value['docencia']; ?>
                    </div>
                  </div>
                <?php 
                  }
                ?>

                <?php 
                  if(!empty($value['principais_publicacoes_titulo'])) {
                ?>
                  <div>
                    <div class="titulo">
                      <?php echo $value['principais_publicacoes_titulo']; ?>
                    </div>
                    <div class="item">
                      <?php echo $value['principais_publicacoes']; ?>
                    </div>
                  </div>
                <?php 
                  }
                ?>
              </div>
            </div> -->
            

          </div>
          <div class="col-md-6 h-100 box-img">
            <img class="lazyload img-person" src="" data-srcset="<?php echo $value['foto']; ?>"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php 
    }
  ?>

  <div class="section">
    <div class="experiencia h-100">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-3 d-none d-lg-flex h-100"></div>
          <div class="col-md-8 box h-100">
            <h2><?php echo get_dados('titulo_experiencia'); ?></h2>
            <?php echo get_dados('conteudo_experiencia'); ?>
            <div class="btn-modal">
             <?php echo get_dados('botao_experiencia'); ?>
            </div>
            <div class="box-itens-modal">
              <div class="close-c">
                
              </div>
              <div class="box-c">
                <div class="titutlo">
                  <?php echo get_dados('botao_experiencia'); ?>
                </div>
                <div class="box-scroll">
                  <div class="scroll-enable-up"></div>
                  <div class="scroll-enable-down"></div>
                  <div class="scroll-c conteudos">
                    <?php 
                      foreach(get_dados('contencioso_judicial') as $key => $value) {
                    ?>
                    <div>
                      <?php
                        echo $value['artigo'];
                      ?>
                    </div>
                    <?php 
                      }
                    ?>
                  </div>
                </div>
              </div>
              
              <div class="box-c">
                <div class="titutlo">
                  <?php echo get_dados('arbitragem_titulo'); ?>
                </div>
                <div class="box-scroll">
                  <div class="scroll-enable-up"></div>
                  <div class="scroll-enable-down"></div>
                  <div class="scroll-c conteudos">
                    <?php 
                      foreach(get_dados('arbitragem') as $key => $value) {
                    ?>
                    <div>
                      <?php
                        echo $value['artigo'];
                      ?>
                    </div>
                    <?php 
                      }
                    ?>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="imprensa h-100">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-3 d-none d-lg-flex h-100"></div>
          <div class="col-md-8 box h-100">
          <div class="box-scroll">
              <div class="scroll-enable-up"></div>
              <div class="scroll-enable-down"></div>
              <div class="scroll-c">
                <?php 
                  foreach(get_dados('artigos') as $key => $artigo) {
                ?>
                  <div class="acordion">
                    <div class="titulo">
                      <?php echo $artigo['titulo']; ?>
                    </div>
                    <div class="conteudo">
                      <?php echo $artigo['conteudo']; ?>
                    </div>
                    <div class="fonte">
                      Fonte: <?php echo $artigo['fonte']; ?>
                    </div>
                  </div>
                <?php
                  }
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="contato h-100">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-3 d-none d-lg-flex h-100"></div>
          <div class="col-md-8 box-container box h-100">
            <div class="box-el">
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
          </div>
        </div>
      </div>
    </div>
    
  </div>

</div>

<?php
get_footer();