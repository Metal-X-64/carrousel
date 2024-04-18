<?php
/**
 * Plugin Name: Carrousel
 * Author: Samuel Giroux
 * Description: Affiche le carrousel associé à une galerie de Wordpress
 * Version: 1.0.0
 * Plugin URI: https://github.com/Metal-X-64/4w4
 * Author URI: https://referenced.ca
 */


function enenqueue_style_script(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "sass/style.scss");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);

}

add_action('wp_enqueue_scripts','enenqueue_style_script');

function genere_html(){
    $html = '
    <button class="bouton__ouvrir">Ouvrir Carrousel</button>
    <div class="carrousel">
        <a href="" class="carrousel__x">X</a>
        <figure class="carrousel__figure"></figure>
        <form action="" class="carrousel__form"></form>
    </div>
    ';
    return $html;
}

 add_shortcode('carrousel', 'genere_html');