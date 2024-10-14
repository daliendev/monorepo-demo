<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class HelloWorldController extends AbstractController
{
    #[Route('/hello/world', name: 'app_hello_world')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'This is the Message from the Symfony backend! Yes I am :)',
            'path' => 'src/Controller/HelloWorldController.php',
        ]);
    }
}
