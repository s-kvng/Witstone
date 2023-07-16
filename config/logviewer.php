<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Pattern and storage path settings
    |--------------------------------------------------------------------------
    |
    | The env key for pattern and storage path with a default value
    |
    */
    'max_file_size' => 52428800, // size in Byte
    'pattern'       => env('LOGVIEWER_PATTERN', '*.log'),
    'storage_path'  => env('LOGVIEWER_STORAGE_PATH', storage_path('logs')),

    /*
    |--------------------------------------------------------------------------
    | Additional Configuration Options
    |--------------------------------------------------------------------------
    |
    | Add any additional configuration options here
    |
    */
    'theme'        => 'bootstrap-v4',
    'per_page'     => 50,
    'time_format'  => 'Y-m-d H:i:s',
    'base_url'     => env('LOGVIEWER_BASE_URL', 'logs'),
    'log_files'    => env('LOGVIEWER_LOG_FILES', 'all'),
];
