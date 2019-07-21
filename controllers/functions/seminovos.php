<?php 

// Bloqueia Criação e Edição
function block_post_new_edit_seminovos( $pagehook ){
    global $post_type, $current_screen;
    if($post_type == 'seminovos')
    {
        wp_enqueue_script('block-title', '/wp-content/themes/' . get_template().'/admin/disable_all_components.js', array('jquery'));
    }
}
// add_action('admin_enqueue_scripts', 'block_post_new_edit_seminovos');

//Cria o Post Seminovos
function create_seminovos_post_types() {
    register_post_type( 'seminovos',
        array(
            'capability_type' => 'post',
            'capabilities' => array(
                'create_posts' => false,
            ),
            'map_meta_cap'       => true,
            'labels' => array(
                'name' => __( 'Seminovos' ),
                'singular_name' => __( 'Seminovos' )
            ),
            'public' => true,
            'show_in_menu' => false,
            'menu_icon' => 'dashicons-feedback',
            'supports' => array( 'title'),
            'rewrite' => array( 'slug' => 'seminovos', 'with_front' => false ),
        )
    );
}
add_action( 'init', 'create_seminovos_post_types' );

function insert_elementos_seminovos($arr, $xml) {

    $i = 1;
    foreach ($arr as $key => $value) {

        $opcionais_value = array();
        $acessorio_value = array();
        $foto_value = array();

        $titulo = $value->marca . ' - ' . $value->modelo . ' - ' . $value->versao;
        $some_post = array(
            'post_title' => $titulo,
            'post_type' => 'seminovos',
            'post_status' => 'publish'
        );
        $the_post_id = wp_insert_post($some_post);

        $preco = str_replace('R$ ', '', $value->preco);
        $preco = str_replace(',00', '', $preco);
        $preco = str_replace(',', '', $preco);

        update_field('id', $value->id, $the_post_id);
        update_field('marca', $value->marca, $the_post_id);
        update_field('modelo', $value->modelo, $the_post_id);
        update_field('versao', $value->versao, $the_post_id);
        update_field('ano_fabricacao', $value->anofabricacao, $the_post_id);
        update_field('ano_modelo', $value->anomodelo, $the_post_id);
        update_field('cambio', $value->cambio, $the_post_id);
        update_field('km', $value->km, $the_post_id);
        update_field('portas', $value->portas, $the_post_id);
        update_field('cor', $value->cor, $the_post_id);
        update_field('combustivel', $value->combustivel, $the_post_id);
        update_field('preco', $preco, $the_post_id);
        update_field('cadastro', $value->cadastro, $the_post_id);
        update_field('alteracao', $value->alteracao, $the_post_id);

        if(isset($value->opcionais->opcional) && is_array($value->opcionais->opcional))
        {
            foreach ($value->opcionais->opcional as $key => $opcional) {
                $opcionais_value[] = array(
                    "field_5bcf6a02fcd6f"   => $opcional
                );
            }
            $opcionais_key = "field_5bcf69f8fcd6e";
            update_field($opcionais_key, $opcionais_value, $the_post_id);
        }   
        if(isset($value->acessorios->acessorio) && is_array($value->acessorios->acessorio))
        {
            foreach ($value->acessorios->acessorio as $key => $acessorio) {
                $acessorio_value[] = array(
                    "field_5bcf6a32fcd71"   => $acessorio
                );
            }
            $acessorio_key = "field_5bcf6a1dfcd70";
            update_field($acessorio_key, $acessorio_value, $the_post_id);
        }
        if(isset($value->fotos->foto) && is_array($value->fotos->foto))
        {
            foreach ($value->fotos->foto as $key => $foto) {
                $foto_value[] = array(
                    "field_5bcf6a5bfcd73"   => $foto
                );
            }
            $foto_key = "field_5bcf6a49fcd72";
            update_field($foto_key, $foto_value, $the_post_id);
        }
        update_seminovos($xml, $i);
        $i = $i + 1;
    }
}




