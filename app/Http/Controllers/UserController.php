<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function changePasswordPage()
    {
        return Inertia::render('ChangePassword');
    }
    public function changePassword(Request $request)
    {
        
        $user = $request->user();
        if($request->has('password'))
        {
        $user->password= Hash::make($request->input('password')); 
        $user->save();
        }
        return to_route('CategoriesPage');
    }
    public function logout(Request $request): RedirectResponse
{
    
    Auth::logout();
 
    $request->session()->invalidate();
 
    $request->session()->regenerateToken();
 
    return redirect('/login');
}
public function authenticate(Request $request):RedirectResponse
{
    $credentials= $request->validate(
        [
            'name'=>['required','max:25'],
            'password'=>['required','max:30']
        ]
        );
        if(Auth::attempt($credentials))
        {
            $request->session()->regenerate();
            
            return redirect()->intended(route('CategoriesPage'));
        }
        return back()->withErrors([
            'name' => 'Błędne dane logowania',
        ])->onlyInput('name');

}

    public function index()
    {
        return Inertia::render('Login');
    }
}
