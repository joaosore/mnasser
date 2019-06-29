<?php

function get_home()
{
  $data = array(
    'video' => get_id_video(get_dados('video_inicial')),
    'moldura' => get_dados('rodape_moldura'),
    'conceitos' => array(
      'titulo' => get_dados('titulo_conceitos'),
      'conteudo' => get_dados('conteudo_conceitos')
    ),
    'inspiracao' => array(
      'titulo' => get_dados('titulo_inpiracao'),
      'conteudo' => get_dados('conteudo_inpiracao')
    ),
    'pessoas' => get_dados('integrante'),
    'experiencia' => array(
      'titulo' => get_dados('titulo_experiencia'),
      'conteudo' => get_dados('conteudo_experiencia'),
      'contencioso_judicial_titulo' => get_dados('contencioso_judicial_titulo'),
      'contencioso_judicial' => get_dados('contencioso_judicial'),
      'arbitragem_titulo' => get_dados('arbitragem_titulo'),
      'arbitragem' => get_dados('arbitragem'),
    ),
    'imprensa' => get_dados('artigos'),
    'contato' => array(
      'dados' => get_dados('dados'),
      'redes' => get_dados('redes_sociais')
    )
  );
  header('Content-Type: application/json');
  echo json_encode($data);
}

function get_inicial()
{
  $data = array(
    'video' => get_id_video(get_dados('video_inicial')),
    'moldura' => get_dados('rodape_moldura'),
  );
  header('Content-Type: application/json');
  echo json_encode($data);
}

function get_conceito()
{
  $data = array(
    'titulo' => get_dados('titulo_conceitos'),
    'conteudo' => get_dados('conteudo_conceitos')
  );
  header('Content-Type: application/json');
  echo json_encode($data);
}