<?php 

// Bloqueia o Titulo do Post
function block_post_title_atendimento( $pagehook ){
    global $post_type, $current_screen;
    if($post_type == 'atendimento_domingos')
    {
        wp_enqueue_script('block-title', '/wp-content/themes/' . get_template().'/admin/block_post_title.js', array('jquery'));
    }
}
add_action('admin_enqueue_scripts', 'block_post_title_atendimento');

//Subistitui o titulo de cada post pelo Tipo e Telefone inseridos
function atendimento_post_title_updater( $post_id ) {
    $my_post = array();
    $my_post['ID'] = $post_id;
    $data = get_field('data');
    if ( get_post_type() == 'atendimento_domingos' ) {
        $my_post['post_title'] = get_field('data');
    }
    wp_update_post( $my_post );
}
add_action('acf/save_post', 'atendimento_post_title_updater', 20);

//Cria o Post Central de Atendimento
function create_atendimento_post_types() {
    register_post_type( 'atendimento_domingos',
        array(
            'labels' => array(
                'name' => __( 'Atendimento aos Domingos' ),
                'singular_name' => __( 'Atendimento aos Domingos' )
            ),
            'public' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'menu_icon' => 'dashicons-calendar-alt',
            'supports' => array( 'title'),
            'rewrite' => array( 'slug' => 'atendimento_domingos', 'with_front' => false ),
        )
    );
}
add_action( 'init', 'create_atendimento_post_types' );

// Coleta todos os Telefones da Central de Atendimento.
function get_atendimento_domingos() {

    $atendimento_domingos = array();

    $query = new WP_Query(array(
        'post_type' => 'atendimento_domingos',
        'post_status' => 'publish',
        'posts_per_page' => -1
    ));

    while ($query->have_posts()) {
        $query->the_post();
        $post_id = get_the_ID();
        $atendimento_domingos[] = get_field("data", $post_id);
    }
    
    $data_atual = date('Y-m-d');
    $proximo_domingo = array();

    function domingos($data_atual, $day)
    {
        return date('Y-m-d', strtotime($data_atual . '+ ' . $day . ' days'));
    }

    if(date('N', strtotime($data_atual)) == 7)
    {
        $proximo_domingo = $data_atual;
    }
    else if(date('N', strtotime($data_atual)) == 1)
    {
        $proximo_domingo = domingos($data_atual, 6);
    }
    else if(date('N', strtotime($data_atual)) == 2)
    {
        $proximo_domingo = domingos($data_atual, 5);
    }
    else if(date('N', strtotime($data_atual)) == 3)
    {
        $proximo_domingo = domingos($data_atual, 4);
    }
    else if(date('N', strtotime($data_atual)) == 4)
    {
        $proximo_domingo = domingos($data_atual, 3);
    }
    else if(date('N', strtotime($data_atual)) == 5)
    {
        $proximo_domingo = domingos($data_atual, 2);
    }
    else if(date('N', strtotime($data_atual)) == 6)
    {
        $proximo_domingo = domingos($data_atual, 1);
    }

    setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
    date_default_timezone_set('America/Sao_Paulo');

    $domingo = false;
    if(in_array($proximo_domingo, $atendimento_domingos))
    {
        $domingo = strftime('%d de %B', strtotime($proximo_domingo));
    }

    return $domingo;
}