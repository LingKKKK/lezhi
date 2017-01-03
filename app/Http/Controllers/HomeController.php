<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Session;
use App\Util\Tools;
use App\WebAuth\ApiProxy;

class HomeController extends Controller {

	public function index(Request $request, ApiProxy $apiproxy) {
		$attachSession = $this->attachSession();

		if ($attachSession) {
			return $attachSession;
		}

		$user = $this->currentUser();

		$mainpage = config('platform.url.mainpage');
		$find_password_url = config('platform.url.find_password');


		$register_url = config('platform.url.register');
		$find_password_url = config('platform.url.find_password');
		$home_url = config('navigation.master.mainpage');
		$urldata = compact('register_url', 'find_password_url', 'home_url');
		$urldata = (object)$urldata;
		// $loginInfo = Tools::getLoginInfo($request->url());
		$loginInfo = array();
		$qrscanData = $apiproxy->weixinScan();
		if (isset($qrscanData['status']) && $qrscanData['status'] == 0) {
			$qrscanData['data']['login_key'] = $qrscanData['data']['auth_key'];
            $login_key = $qrscanData['data']['auth_key'];
            $qrscanData['data']['login_key'] = $login_key;
            Session::put('login_key', $login_key);
            Session::put('login_data', json_encode($qrscanData['data']));

            $loginInfo = (object)($qrscanData['data']);
		}
		$user = $user != null ? (object)$user : null;

		return view("index", compact('user', 'loginInfo', 'urldata'));
	}
}
