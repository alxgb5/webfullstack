<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/inscription')]
class InscriptionApiController extends AbstractController
{
    #[Route('/', methods: 'POST')]
    public function inscription(Request $request, ManagerRegistry $doctrine, SerializerInterface $serializer, ValidatorInterface $validator): Response
    {
        $futureUser = $serializer->deserialize($request->getContent(), FutureUser::class, 'json');

        $errors = $validator->validate($futureUser);

        if ($errors->count() > 0) {
            return $this->json(array(
                'success' => false,
                'data' => $errors,
                'message' => 'Errors during request validation',
            ));
        }

        $entityManager = $doctrine->getManager();

        $futureUser->setValidated(false);

        $entityManager->persist($futureUser);
        $entityManager->flush();

        return $this->json(array(
            'success' => true,
            'message' => 'Future user registered'
        ));
    }

    #[Route('/validate-user/{id}', methods: 'POST')]
    public function validate(int $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();
        $futureUser = $entityManager->getRepository(FutureUser::class)->find($id);

        if (!$futureUser) {
            return $this->json(array(
                'success' => false,
                'message' => 'Future user not found'
            ));
        }

        if ($futureUser->isValidated()) {
            return $this->json(array(
                'success' => false,
                'message' => 'User already validated'
            ));
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

        return $this->json(array(
            'succcess' => true,
            'message' => 'User successfully validated',
        ));
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
