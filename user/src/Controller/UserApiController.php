<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

#[Route("/api/user")]
class UserApiController extends AbstractController
{
    #[Route('/', methods: 'GET')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json(
            [
                'id' => $user->getId(),
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()
            ]
        );
    }

    #[Route('/check_role', methods: 'POST')]
    public function checkRole(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);

        if (!isset($data, $data['role'])) {
            return $this->json([
                'message' => 'Invalid role',
            ], Response::HTTP_BAD_REQUEST);
        }

        $role = $data['role'];

        return $this->json(in_array($role, $user->getRoles()));
    }
}
