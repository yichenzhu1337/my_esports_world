<?php

namespace App\Acme\Modules\Authentication\Repositories;

use App\User;
use Illuminate\Support\Facades\Auth;

class AuthenticationRepository
{
    /**
     * AuthenticationRepository constructor.
     *
     * @param User $user
     * @param Auth $auth
     */
    function __construct(User $user, Auth $auth)
    {
        $this->user = $user;
        $this->auth = $auth;
    }

    /**
     * Inserts the the email and password into the database
     * @param $input
     * @return static
     */
    public function register($input)
    {
        return $this->user->create([
            'email' => $input['email'],
            'password' => $input['password'],
            'facebook_id' => null,
            'twitter_id' => null,
        ]);
    }

    /**
     * @param $input
     * @return mixed
     */
    public function login($input)
    {
        return $this->auth->attempt([
            'email' => $input['email'],
            'password' => $input['password']
        ]);
    }

    /**
     * @return mixed
     */
    public function logout()
    {
        return $this->auth->logout();
    }
}