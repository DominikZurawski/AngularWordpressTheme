<?php
/* Template Name: Custom HTML Template */
get_header(); ?>

<div id="content">
    <?php
    $filePath = dirname(__FILE__) . '/browser/index.php';
    if (file_exists($filePath)) {
        echo file_get_contents($filePath);
    } else {
        echo "Plik nie został znaleziony.";
    }
    ?>
</div>

<?php get_footer(); ?>
