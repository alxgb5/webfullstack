<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

#[Route("/api/user")]
class UserApiController extends AbstractController
{
    #[Route('/', methods: 'GET')]
    public function show(): Response
    {
        $user = $this->getUser();
        return $this->json(
            [
                'success' => true,
                'data' => array(
                    'id' => $user->getId(),
                    'user' => $user->getUserIdentifier(),
                    'roles' => $user->getRoles()
                ),
                'message' => 'User recovered'
            ]
        );
    }

    #[Route('s', methods: 'GET')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $users = $entityManager->getRepository(User::class)->findAll();

        return $this->json(array(
            'success' => true,
            'data' => array('users' => $users),
            'message' => 'Users recovered',
        ));
    }

    #[Route('/check_role', methods: 'POST')]
    public function checkRole(Request $request)
    {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);

        if (!isset($data, $data['role'])) {
            return $this->json([
                'success' => false,
                'message' => 'Invalid role',
            ]);
        }

        $role = $data['role'];

        return $this->json(array('isAuthorized' => in_array($role, $user->getRoles())));
    }
}
