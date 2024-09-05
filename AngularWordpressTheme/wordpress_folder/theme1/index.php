<?php
// Sprawdź, czy użytkownik jest zalogowany i czy pasek administracyjny jest włączony
if (is_user_logged_in() && is_admin_bar_showing()) {
    // Dodaj pasek administracyjny
    wp_head();
}
?>

<?php
$serverAddress = 'http://' . $_SERVER['SERVER_ADDR'] . ':8080';
?>
<iframe src="<?php echo $serverAddress; ?>" style="width: 100%; height: 100vh; border: none;"></iframe>

<?php
// Dodaj pasek administracyjny
if (is_user_logged_in() && is_admin_bar_showing()) {
    wp_footer();
}
?>
