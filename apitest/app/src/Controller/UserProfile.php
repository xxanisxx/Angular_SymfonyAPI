<?php

namespace App\Controller;

use App\Entity\User;
use DateTimeImmutable;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class UserProfile
{
    public function __invoke(User $data)
    {
        return $data;
    }
}
