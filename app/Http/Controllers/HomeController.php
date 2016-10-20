<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Auth;
use DB;
use Illuminate\Http\Request;
use Session;

class HomeController extends Controller {

	public function index(Request $request) {
		return view("index");
	}

	public function game(Request $request) {
		return view("game");
	}

	public function programme(Request $request) {
		return view("programme");
	}

	public function product(Request $request) {
		return view("product");
	}

	public function about(Request $request) {
		return view("about");
	}
}
