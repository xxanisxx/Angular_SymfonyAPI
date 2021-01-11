<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Article;
use App\Entity\Comment;

class CommentForArticle
{

    public function __invoke(Comment $data, Article $article)
    {
        $data->setArticleOwner($article);
        return $data;
    }
}
