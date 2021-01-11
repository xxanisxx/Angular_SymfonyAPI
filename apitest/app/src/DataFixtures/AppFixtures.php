<?php

namespace App\DataFixtures;

use App\Entity\Article;
use App\Entity\Comment;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private UserPasswordEncoderInterface  $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();
        for ($u=0; $u<10; $u++)
        {
            $user = new User();
            $passHash = $this->encoder->encodePassword($user, "password");

            $user->setEmail($faker->email)
                ->setPassword($passHash)
                ->setName($faker->text(20))
                ->setStatus(false);
            $manager->persist($user);
            for ($a=0; $a < random_int(5, 15); $a++)
            {
                $article = (new Article())->setAuthor($user)
                    ->setContent($faker->text(300))
                    ->setTitle($faker->text(50));
                $manager->persist($article);
                for ($c=0; $c < random_int(5, 15); $c++) { 
                    $comment = (new Comment())->setOwner($user)
                    ->setArticleOwner($article)
                    ->setContent($faker->text(100));
                    $manager->persist($comment);
                }
            }
        }
        $manager->flush();
    }
}
