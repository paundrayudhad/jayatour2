<?php

return [
    'default_panel' => 'admin',

    'panels' => [
        'admin' => [
            'id' => 'admin',
            'path' => 'admin',
            'brand' => [
                'name' => 'Jayatour Admin',
            ],
            'discover_resources' => [
                app_path('Filament/Resources'),
            ],
            'discover_pages' => true,
            'middleware' => [
                'web',
            ],
            'auth' => [
                'guard' => 'web',
            ],
        ],
    ],
];
