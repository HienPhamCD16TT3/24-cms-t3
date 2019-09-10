<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mobile' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ikrwe/!N7@qO #O@JRa!4BYy9RX0J`(1L%$Zj_GcmYs|X.>}Z9!<4vdyiD+F=_EH' );
define( 'SECURE_AUTH_KEY',  'EuB>}*#6ThP$T$ EiYG^i?-$.O>o[y`$^s:/Z`?qD>_d.Y,;Iv$r8p//~V!P`Fy4' );
define( 'LOGGED_IN_KEY',    '7nm-9kPp=@W1 ?!.7uESft=;+fniIcW:19SpE+}^(ea-lyOqr3e6&&Z(X-@KHL}D' );
define( 'NONCE_KEY',        '= l<(:}{n *jixsS@f166pX|S^Zhm.>JZx->ow%fj8(GL|=${.Q~D0&CeYSVP^><' );
define( 'AUTH_SALT',        'SAWD[3Z[-C#I{W.qWm4oU5h{HVUEN7Hqc!?Y7UXoZghlv)lIE>!>GNr|sv<!A4#X' );
define( 'SECURE_AUTH_SALT', ')S|FAd=rwUtTs7dkVGr=i{vQm,_/4VpdSooMwZA[_]Q3VO}#SHO)f!U69><2xt!1' );
define( 'LOGGED_IN_SALT',   'O`&Shi.)=dqC=R^0zMng,BdIlKnee(4SM/[@Y?`atcByvvPYr;)PRy)OVQ,w=bz5' );
define( 'NONCE_SALT',       '024TTG2a:T<c*MTI0u$w8#]CsfP 4XZ>[yO2Yvjh1[4Wy0>Z_D3l5NB$$[7/j#/d' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
