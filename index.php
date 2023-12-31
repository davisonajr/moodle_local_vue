<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * Index Vue Template.
 * @package    local_vue
 * @copyright  2023 Davison Ramos <davison.ajr@gmail.com>
 * @author     Davison Ramos
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require_once(__DIR__ . '/../../config.php');

require_login();

$PAGE->set_context(context_system::instance());
$PAGE->set_title(get_string('pluginname', 'local_vue'));
$PAGE->set_url(new moodle_url('/local_vue'));
//$PAGE->requires->css(new moodle_url('/local/local_vue/styles.css'));
$PAGE->navbar->add(get_string('pluginname', 'local_vue'));

echo $OUTPUT->header();
echo $OUTPUT->heading(get_string('pluginname', 'local_vue'));
$renderable = new \local_vue\output\index_page('#app-main');
$output = $PAGE->get_renderer('local_vue');

echo $output->render($renderable);

echo $OUTPUT->footer();