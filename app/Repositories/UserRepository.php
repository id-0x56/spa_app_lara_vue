<?php

namespace App\Repositories;

use App\User;

class UserRepository
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function all()
    {
        return $this->user
            ->all();
    }

    public function paginated($paginate)
    {
        return $this->user
            ->paginate($paginate);
    }

    public function find($id)
    {
        return $this->user
            ->find($id);
    }

    public function create(array $input)
    {
        return $this->user
            ->fill($input)
            ->save();
    }

    public function update($id, array $input)
    {
        return $this->find($id)
            ->fill($input)
            ->save();
    }

    public function destroy($id)
    {
        return $this->find($id)
            ->forceDelete();
            // ->delete();
    }
}
