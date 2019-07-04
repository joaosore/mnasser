<?php

// Bloqueia o Titulo do Post
function block_post_title_telefones_lojas( $pagehook ){
    global $post_type, $current_screen;
    if($post_type == 'telefones_lojas')
    {
        wp_enqueue_script('block-title', '/wp-content/themes/' . get_template().'/admin/block_post_title.js', array('jquery'));
    }
}
add_action('admin_enqueue_scripts', 'block_post_title_telefones_lojas');

//Subistitui o titulo de cada post pelo Tipo e Telefone inseridos
function lojas_post_title_updater( $post_id ) {
    $my_post = array();
    $my_post['ID'] = $post_id;
    $data = get_field('tipo');
    if ( get_post_type() == 'telefones_lojas' ) {
        $my_post['post_title'] = get_field('tipo') . ' - ' . get_field('telefone');
    }
    wp_update_post($my_post);
}
add_action('acf/save_post', 'lojas_post_title_updater', 20);

//Cria o Post Telegones Lojas
function create_lojas_post_types() {
    register_post_type( 'telefones_lojas',
        array(
            'labels' => array(
                'name' => __( 'Telefones Lojas' ),
                'singular_name' => __( 'Telefones Lojas' )
            ),
            'public' => true,
            'show_ui' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_icon' => 'dashicons-store',
            'supports' => array( 'title'),
            'rewrite' => array( 'slug' => 'telefones_lojas', 'with_front' => false ),
        )
    );
}
add_action( 'init', 'create_lojas_post_types' ); 

//Cria um Taxinomia Loja.
function create_loja_taxonomies() {
    $labels = array(
        'name'              => _x( 'Lojas', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'Loja', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Pesquisar Lojas', 'textdomain' ),
        'all_items'         => __( 'Todas Lojas', 'textdomain' ),
        'edit_item'         => __( 'Editar Loja', 'textdomain' ),
        'update_item'       => __( 'Atualizar Loja', 'textdomain' ),
        'add_new_item'      => __( 'Adicionar nova Loja', 'textdomain' ),
        'new_item_name'     => __( 'Nova Loja Name', 'textdomain' ),
        'menu_name'         => __( 'Loja', 'textdomain' ),
    );
    $args = array(
        'hierarchical'      => false,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'loja'),
    );
    register_taxonomy( 'loja', array( 'telefones_lojas' ), $args );
}
add_action( 'init', 'create_loja_taxonomies', 0 );

// Coleta todos os telefones de Lojas.
function get_telefones_lojas() {
    $telefones_lojas = array();
    $query = new WP_Query(array(
        'post_type' => 'telefones_lojas',
        'post_status' => 'publish',
        'posts_per_page' => -1
    ));
    while ($query->have_posts()) {
        $query->the_post();
        $post_id = get_the_ID();
        $term_list = wp_get_post_terms($post_id, 'loja', array("fields" => "all"));
        $telefones_lojas[$term_list[0]->name][] = array(
            'tipo'  => get_field("tipo", $post_id),
            'telefone'  => get_field("telefone", $post_id)
        );
    }
    return $telefones_lojas;
}