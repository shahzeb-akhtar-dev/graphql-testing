<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'users',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(Type::string());
    }

    public function args(): array
    {
        return [

        ];
    }

    public function resolve($root, array $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        return [
            'The users works',
        ];
    }
}
