<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>stories page</title>


<script src="<?php echo base_url();?>assets/js/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>assets/js/bootstrap.min.js" type="text/javascript"></script>
<link href="<?php echo base_url();?>assets/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="<?php echo base_url();?>assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700' rel='stylesheet' type='text/css' />
<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css' />
<script src="<?php echo base_url();?>assets/js/wittyfeed.js" type="text/javascript"></script>
<link href="<?php echo base_url();?>assets/css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
     <!--header start-->
  <header class="header navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed custome_toggle_btn" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand wittyfeed_logo" href="#"><img src="<?php echo base_url();?>assets/image/logo.png" /></a>
        </div>
        
        <div id="navbar" class=" navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
               <ul class="list-inline list-unstyled social_like_btn_header">
                  <li><a href="javascript:void(0)"> 
                  <i class="fa fa-facebook img-circle fb_like"></i> </a></li>
                  
                  <li><a href="javascript:void(0)"> 
                  <i class="fa fa-twitter img-circle twit_follow"></i> </a></li>
                  
                  <li><a href="javascript:void(0)">
                   <i class="fa fa-google-plus img-circle gplus_plus"></i></a></li>
               </ul>
            </li>
            <li class="header_navigation_menu signIn_xs "><a href="#"> <i class="fa fa-sign-in" style="font-size: 18px; padding-right:5px"></i>  Sign Up</a></li>
            <li class="header_navigation_menu addStory_xs"><a href="#" data-toggle="modal" data-target="#myModal_create_story">
             <i class="fa fa-plus" style="font-size: 18px; padding-right:5px"></i> Add Story</a></li>
          </ul>
          <form class="navbar-form navbar-right header_searchbar_container hidden-xs hidden-sm">
          	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding:0px;">
               <i class="fa fa-search"></i>
               <input type="text" class="form-control" placeholder="Search..."> 
               <span class="brdrLeftRight"></span>
            </div>
          </form>
        </div>
      </div>
    </header>
    </body>
</html>