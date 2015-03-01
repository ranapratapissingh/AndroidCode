<?php
require(APPPATH.'libraries/REST_Controller.php');
 
class Demo extends REST_Controller {
    public function __construct()
    {
        parent::__construct();
    }

    public function index_get()
    {
        $data['title'] = 'Home';
        $data['main_content'] = 'demo';
        $this->load->view('master',$data);
    }
 
    function user_get()
    {
        // respond with information about a user
        if($this->get('id'))
        {
            $this->response(array('name' => "DDDDDDDDDDDDDDDDDDDDDDDDDDDemo program of Rest Api"),200);  
        }
        else
        {
            $this->response(array('name' => "Error in response"),404);
        }
        
    }
 
    function user_put()
    {
        // create a new user and respond with a status/errors
    }
 
    function user_post()
    {
        // update an existing user and respond with a status/errors
    }
 
    function user_delete()
    {
        // delete a user and respond with a status/errors
    }
}