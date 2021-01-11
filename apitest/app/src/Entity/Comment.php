<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Controller\CommentForArticle;
use App\Repository\CommentRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 * @ApiResource(
 *     collectionOperations={
 *          "get"={
 *               "normalization_context"={"groups"={"comment_read"}}
 *          },
 *          "post"={
 *              "method"="POST",
 *              "path"="/comments/{id}/comments",
 *              "controller"=CommentForArticle::class,
 *          },
 *     },
 *     itemOperations={
 *          "get"={
 *               "normalization_context"={"groups"={"comment_detail_read"}}
 *          },
 *          "put"={"security_post_denormalize"="(object.getOwner() == user )", 
 *                 "security_post_denormalize_message"="Sorry, but you are not the actual Comment owner."},
 *          "patch",
 *          "delete",
 *     }
 * )
 */
class Comment
{
    use ResourceId;
    use Timestable;

    /**
     * @ORM\Column(type="text")
     * @Groups({"comment_read","article_read", "article_detail_read", "comment_detail_read"})
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"comment_read","article_read", "article_detail_read", "comment_detail_read"})
     */
    private $owner;

    /**
     * @ORM\ManyToOne(targetEntity=Article::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $articleOwner;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function getArticleOwner(): ?Article
    {
        return $this->articleOwner;
    }

    public function setArticleOwner(?Article $articleOwner): self
    {
        $this->articleOwner = $articleOwner;

        return $this;
    }
}
