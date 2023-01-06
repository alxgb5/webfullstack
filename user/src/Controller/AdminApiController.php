<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin')]
class AdminApiController extends AbstractController
{
    #[Route('/', methods: 'GET')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json(
            [
                'success' => true,
                'data' => array(
                    'user' => $user->getUserIdentifier(),
                    'roles' => $user->getRoles()
                ),
                'message' => "Congratulations you are admin!",
            ]
        );
    }
}
