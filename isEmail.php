<?php

class Validate extends ValidateCore {

	public static function isEmail($email)
	    {
	        return !empty($email) && preg_match(Tools::cleanNonUnicodeSupport("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"), $email);
	    }
}
