<?php

namespace App\Support;

use RuntimeException;

/**
 * Reads values from resources/js/data/content.js, the single source of the site's
 * content, so routes and validation match what the pages show.
 */
class Portfolio
{
    private static ?string $content = null;

    /** @return list<string> */
    public static function workSlugs(): array
    {
        return self::values('work', 'slug', '    ');
    }

    public static function applicationSlug(): string
    {
        return self::values('application', 'slug', '  ')[0];
    }

    /** @return list<string> */
    public static function serviceTitles(): array
    {
        return self::values('services', 'title', '    ');
    }

    /**
     * Values of `{$field}: '...'` in the `export const {$name}` block, at the given
     * indent so nested objects don't match.
     *
     * @return list<string>
     */
    private static function values(string $name, string $field, string $indent): array
    {
        self::$content ??= file_get_contents(resource_path('js/data/content.js'));

        if (! preg_match('/^export const '.$name.' = (.*?)^export /ms', self::$content."\nexport ", $block)
            || ! preg_match_all('/^'.$indent.$field.": '([^']+)',$/m", $block[1], $matches)) {
            throw new RuntimeException("No {$name} {$field}s found in resources/js/data/content.js.");
        }

        return $matches[1];
    }
}
