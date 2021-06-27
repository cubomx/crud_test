<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()
            ->json([$users], 200);
    }

    public function lastIndex(){
        return User::orderByDesc('id')->limit(1)->get();
    }

    /* creates a new user in the database */

    public function store(Request $request){
        // validates that all the necessary data is available
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'max:250', 'unique:users,email'],
            'password' => ['required', 'min:8'],
        ]);

        /*
        This is ok but it won't tell the time when it
        
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        */
        User::factory()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]
        );

        return response()
            ->json(['status' => 'SUCCESS',
            'msg' => 'User ' . $request->name . " created correctly",
        ], 201);
    }

    public function destroy(User $user){
        $user->delete();
        return response()
            ->json(['status' => 'SUCCESS',
                'msg' => 'User: ' . $user->name . " removed correctly"
    ], 202);
    }
}
