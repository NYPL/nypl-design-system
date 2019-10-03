<?php
/**
 * @file
 * Add "attach_library" function for Pattern Lab.
 */

use Symfony\Component\Yaml\Yaml;

$function = new Twig_SimpleFunction('attach_library', function ($string) {
  // Get Library Name from string.
  $libraryName = substr($string, strpos($string, "/") + 1);

  // Find Library in libraries.yml file.
  $yamlFile = glob('*.libraries.yml');
  $yamlOutput = Yaml::parseFile($yamlFile[0]);
  $scriptTags = [];

  // For each item in .libraries.yml file.
  foreach($yamlOutput as $key => $value) {

    // If the library exists.
    if ($key === $libraryName) {
      $files = $yamlOutput[$key]['js'];
      // For each file, create an async script to insert to the Twig component.
      foreach($files as $key => $file) {
        // By default prefix paths with a /, but remove this for external JS
        // as it would break URLs.
        $path_prefix = '/';
        if (isset($file['type']) && $file['type'] === 'external') {
          $path_prefix = '';
        }
        $scriptString = '<script data-name="reload" data-src="' . $path_prefix . $key . '"></script>';
        $stringLoader = \PatternLab\Template::getStringLoader();
        $scriptTags[$key] = $stringLoader->render(array("string" => $scriptString, "data" => []));
    	}
    }
  }

  return implode($scriptTags);
}, array('is_safe' => array('html')));
