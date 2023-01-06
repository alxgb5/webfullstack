<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;

#[Route("/api/future-users")]
class FutureUserApiController extends AbstractController
{
    #[Route('/', methods: 'GET')]
    public function index(ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $futureUsers = $entityManager->getRepository(FutureUser::class)
            ->findBy(array('validated' => false));

        return $this->json(array(
            'success' => true,
            'data' => $futureUsers,
            'message' => 'Future users recovered',
        ));
    }
}
