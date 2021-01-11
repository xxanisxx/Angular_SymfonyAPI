<?php

namespace App\Events;

use App\Entity\User;
use App\Entity\Article;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Comment;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class CurrentUserForArticlesSubscriber implements EventSubscriberInterface
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['currentUserForArticles', EventPriorities::PRE_VALIDATE],
        ];
    }

    public function currentUserForArticles(ViewEvent $event): void
    {
        $result = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();


        if ($result instanceof Comment && Request::METHOD_POST === $method) {
            $result->setOwner($this->security->getUser());
        }

        if ($result instanceof Article && Request::METHOD_POST === $method) {
            $result->setAuthor($this->security->getUser());
        }

        if ($result instanceof User && Request::METHOD_POST === $method) {
            $result->setStatus(false);
        }
    }
}
