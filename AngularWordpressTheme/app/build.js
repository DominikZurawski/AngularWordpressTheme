const fs = require('fs-extra');
const path = require('path');

// Ścieżki do plików
const distPath = path.join(__dirname, '../app/dist/');
const destinationPath = path.join(__dirname, '../themes/theme1/dist/angular-wordpress-app');
const distPath2 = path.join(__dirname, '../themes/theme1');
const destinationPath2 = path.join(__dirname, '../wordpress_folder/theme1');
// const indexPath = path.join(__dirname, '../themes/angular-wordpress-app/index.php');
// const functionsPath = path.join(__dirname, '../themes/angular-wordpress-app/functions.php');

// // Funkcja do aktualizacji plików PHP
// function updatePHPFiles() {
//     if (!fs.existsSync(distPath)) {
//         throw new Error(`Folder ${distPath} nie istnieje.`);
//     }

//     const files = fs.readdirSync(`${distPath}/browser`);
//     const mainJsFile = files.find(file => file.startsWith('main') && file.endsWith('.js'));
//     const polyfillsJsFile = files.find(file => file.startsWith('polyfills') && file.endsWith('.js'));
//     const stylesCssFile = files.find(file => file.startsWith('styles') && file.endsWith('.css'));

//     if (!mainJsFile || !polyfillsJsFile || !stylesCssFile) {
//         throw new Error('Nie znaleziono wymaganych plików w folderze dist.');
//     }

//     // Aktualizacja index.php
//     let indexContent = fs.readFileSync(indexPath, 'utf8');
//     indexContent = indexContent.replace(/<script src=".*polyfills.*\.js"><\/script>/, `<script src="<?php echo get_template_directory_uri(); ?>/dist/angular-wordpress-app//browser/${polyfillsJsFile}"></script>`);
//     indexContent = indexContent.replace(/<script src=".*main.*\.js"><\/script>/, `<script src="<?php echo get_template_directory_uri(); ?>/dist/angular-wordpress-app//browser/${mainJsFile}"></script>`);
//     fs.writeFileSync(indexPath, indexContent, 'utf8');

//     // Aktualizacja functions.php
//     let functionsContent = fs.readFileSync(functionsPath, 'utf8');
//     functionsContent = functionsContent.replace(/wp_enqueue_script\('angular-polyfills', '.*polyfills.*\.js', \[\], null, true\);/, `wp_enqueue_script('angular-polyfills', get_template_directory_uri() . '/browser/${polyfillsJsFile}', [], null, true);`);
//     functionsContent = functionsContent.replace(/wp_enqueue_script\('angular-main', '.*main.*\.js', \[\], null, true\);/, `wp_enqueue_script('angular-main', get_template_directory_uri() . '/browser/${mainJsFile}', [], null, true);`);
//     fs.writeFileSync(functionsPath, functionsContent, 'utf8');
// }

// Funkcja do przenoszenia folderu dist
function moveDistFolder(dist, dest) {
    if (!fs.existsSync(dist)) {
        throw new Error(`Folder ${dist} nie istnieje.`);
    }
    fs.copySync(dist, dest);
}

// Wykonanie funkcji
// updatePHPFiles();
moveDistFolder(distPath, destinationPath);
moveDistFolder(distPath2, destinationPath2);

console.log('Pliki zostały zaktualizowane i przeniesione.');
