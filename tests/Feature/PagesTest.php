<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PagesTest extends TestCase
{
    public function test_pages_render_their_inertia_components(): void
    {
        $pages = [
            '/' => 'Home',
            '/work' => 'WorkIndex',
            '/cv' => 'Cv',
            '/application/war-child-canada' => 'Application',
        ];

        foreach ($pages as $url => $component) {
            $this->get($url)->assertOk()->assertInertia(fn (Assert $page) => $page->component($component, false));
        }
    }

    public function test_project_pages_only_exist_for_projects_in_content_js(): void
    {
        $this->get('/work/miles-global-softwares')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page->component('Project', false)->where('slug', 'miles-global-softwares'));

        $this->get('/work/not-a-project')->assertNotFound();
    }
}
