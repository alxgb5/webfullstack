<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;

#[Route('/api/inscription')]
class InscriptionApiController extends AbstractController
{
    #[Route('/', methods: 'POST')]
    public function inscription(Request $request, ManagerRegistry $doctrine): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data, $data['firstname'], $data['lastname'], $data['phone_number'], $data['email'], $data['nationality'])) {
            return $this->json('Invalid body: missing fields');
        }

        $entityManager = $doctrine->getManager();

        $futureUserWithSameEmail = $entityManager
            ->getRepository(FutureUser::class)
            ->findOneBy(['email' => $data['email']]);

        if (isset($futureUserWithSameEmail)) {
            return $this->json('Email already used');
        }

        $futureUser = new FutureUser();
        $futureUser->setFirstname($data['firstname']);
        $futureUser->setLastname($data['lastname']);
        $futureUser->setEmail($data['email']);
        $futureUser->setPhoneNumber($data['phone_number']);
        $futureUser->setNationality($data['nationality']);
        $futureUser->setValidated(false);

        $entityManager->persist($futureUser);
        $entityManager->flush();

        return $this->json('Future user registered');
    }

    #[Route('/validate-user/{id}', methods: 'POST')]
    public function validate(int $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $futureUser = $entityManager->getRepository(FutureUser::class)->find($id);

        if (!$futureUser) {
            return $this->json('Future user not found');
        }

        if ($futureUser->isValidated()) {
            return $this->json('User already validated');
        }

        $futureUser->setValidated(true);
        $entityManager->flush();

        $user = new User();
        $user->setUsername($futureUser->getEmail());
        $user->setRoles(['ROLE_USER']);
        $user->setPassword($this->randomPassword());
        $user->setFutureUser($futureUser);

        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json('User successfully validated');
    }

    private function randomPassword($length = 15)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
